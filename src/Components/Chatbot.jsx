import React, { useState } from "react";
import "./Chatbot.css";

const intents = [
  {
    keywords: ["hello", "hi", "hey"],
    reply: "Hey there! 👋 How can I assist you today?"
  },
  {
    keywords: ["services", "offer", "available"],
    reply: "We offer video consultations, prescriptions, lab testing & mental health support."
  },
  {
    keywords: ["doctor", "consult", "specialist"],
    reply: "Our certified doctors are available 24/7 via the 'Get Services' page."
  },
  {
    keywords: ["appointment", "book", "schedule"],
    reply: "Appointments can be scheduled under the 'Dashboard' or 'Services' section."
  },
  {
    keywords: ["prescription", "medicine", "medications"],
    reply: "You can access your prescriptions from your account dashboard."
  },
  {
    keywords: ["bye", "exit", "goodbye"],
    reply: "Goodbye! Take care and stay healthy! 🩺"
  },
  {
    keywords: ["contact", "support", "help"],
    reply: "Reach our support team via the 'Contact Us' page or email support@medilink.com."
  }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I’m Medilink Assistant 🤖. Ask me anything!", sender: "bot", timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateBotReply = (input) => {
    const lower = input.toLowerCase();
    for (let intent of intents) {
      if (intent.keywords.some(word => lower.includes(word))) {
        return intent.reply;
      }
    }
    return "I'm still learning! Try asking about services, doctors, appointments, or prescriptions. 💡";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(input);
      const botMessage = {
        text: reply,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (text) => {
    setInput(text);
    handleSend();
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-box">
        <div className="chatbot-header">
          💬 Medilink Chatbot
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <div className="message-bubble">{msg.text}</div>
              <div className="timestamp">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          ))}
          {isTyping && <div className="chat-message bot"><div className="typing">Typing...</div></div>}
        </div>

        <div className="quick-replies">
          <button onClick={() => handleQuickReply("What services do you offer?")}>Services</button>
          <button onClick={() => handleQuickReply("How do I consult a doctor?")}>Consult</button>
          <button onClick={() => handleQuickReply("How do I book an appointment?")}>Book</button>
        </div>

        <div className="chatbot-input">
          <input
            value={input}
            placeholder="Type your question..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
