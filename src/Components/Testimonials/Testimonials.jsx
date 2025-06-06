import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Dr. Jane Foster",
    title: "Pediatrician",
    quote: "Medilink transformed how I connect with patients. It's seamless, secure, and dependable.",
    image: "images/Man1.avif"
  },
  {
    name: "Dr. Mark Rylance",
    title: "General Practitioner",
    quote: "The ease of use makes Medilink a preferred platform for both doctors and patients.",
    image: "images/Woman1.avif"
  },
  {
    name: "Sarah L.",
    title: "Therapist",
    quote: "I’ve been able to grow my practice remotely with Medilink’s reliable video consultation.",
    image: "images/Dentist.jpg"
  }
];

function Testimonials() {
  return (
    <section className="testimonials-full">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      {testimonials.map((item, index) => (
        <div
          className={`testimonial-row ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="testimonial-img-wrapper">
            <img src={item.image} alt={item.name} className="testimonial-img" />
          </div>
          <div className="testimonial-text fade-in">
            <p className="quote-text">“{item.quote}”</p>
            <p className="quote-name">{item.name}</p>
            <p className="quote-role">{item.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
