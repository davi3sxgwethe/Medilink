import React from "react";
import "./Articles.css";

const articles = [
  {
    title: "5 Tips for Managing Stress in Daily Life",
    summary: "Explore simple and effective ways to reduce stress and improve your mental well-being.",
    author: "Dr. Janet Lin",
    date: "June 1, 2025"
  },
  {
    title: "Why Regular Check-Ups Matter",
    summary: "Learn why preventive health checks are vital for long-term wellness.",
    author: "Dr. Yusuf Kamau",
    date: "May 29, 2025"
  },
  {
    title: "Understanding Your Prescription",
    summary: "Get a quick guide on how to read your medication labels and avoid common mistakes.",
    author: "Pharmacist Joy M.",
    date: "May 25, 2025"
  }
];

const Articles = () => {
  return (
    <div className="articles-page">
      <h1 className="articles-title">📚 Health & Wellness Articles</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2>{article.title}</h2>
            <p className="summary">{article.summary}</p>
            <div className="meta">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
