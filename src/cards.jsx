// src/cards.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./cards.css";

function NewsCard({
  id,
  image,
  category,
  title,
  description,
  author,
  date,
  signatures,
  goal,
  likes,
}) {
  const progress = Math.min(Math.round((signatures / goal) * 100), 100);
  const navigate = useNavigate();

  return (
    <div
      className="petition-card small"
      onClick={() => navigate(`/petition/${id}`)} // 👈 переход на страницу петиции
    >
      {/* Картинка */}
      <div className="card-image small">
        <img src={image} alt={title} />
        <span className="badge">{category}</span>
      </div>

      {/* Контент */}
      <div className="card-body small">
        <h3 className="card-title small">{title}</h3>
        <p className="card-description small">{description}</p>
        <p className="card-author small">
          by <strong>{author}</strong> • {date}
        </p>

        {/* Прогресс */}
        <div className="progress-info small">
          <span>{signatures.toLocaleString()} signed</span>
          <span>{goal.toLocaleString()} goal</span>
        </div>
        <div className="progress-bar small">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Кнопка + лайки */}
        <div className="card-footer small">
          <button className="sign-btn small">Sign</button>
          <span className="likes">❤️ {likes}</span>
        </div>
      </div>
    </div>
  );
}

export default function NewsList() {
  const cards = [
    {
      id: 1,
      image: "/body.jpg",
      category: "Environment",
      title: "Save the Amazon Rainforest",
      description: "The Amazon rainforest is being destroyed at an alarming rate...",
      author: "Environmental Action Group",
      date: "2 days ago",
      signatures: 125430,
      goal: 150000,
      likes: 8921,
    },
    {
      id: 2,
      image: "/news2.jpg",
      category: "Social Justice",
      title: "Demand Justice for Wrongful Convictions",
      description: "Thousands of innocent people are serving time in prison...",
      author: "Justice Reform Coalition",
      date: "5 days ago",
      signatures: 89654,
      goal: 100000,
      likes: 5432,
    },
    {
      id: 3,
      image: "/news3.jpg",
      category: "Health",
      title: "Make Mental Health Services Accessible",
      description: "Mental health crisis among students is reaching critical levels...",
      author: "Student Wellness Alliance",
      date: "1 week ago",
      signatures: 67890,
      goal: 75000,
      likes: 4123,
    },
    {
      id: 4,
      image: "/news4.jpg",
      category: "Education",
      title: "Fund Schools in Rural Areas",
      description: "Rural schools lack resources and proper facilities...",
      author: "Teachers United",
      date: "3 days ago",
      signatures: 54321,
      goal: 80000,
      likes: 3765,
    },
    {
      id: 5,
      image: "/news5.jpg",
      category: "Animal Rights",
      title: "Stop Animal Cruelty in Factories",
      description: "Millions of animals suffer every year in poor conditions...",
      author: "Animal Protection Org",
      date: "4 days ago",
      signatures: 45678,
      goal: 90000,
      likes: 2890,
    },
    {
      id: 6,
      image: "/news6.jpg",
      category: "Technology",
      title: "Ensure Data Privacy for Citizens",
      description: "People’s data is being misused without consent...",
      author: "Digital Freedom Group",
      date: "6 days ago",
      signatures: 32100,
      goal: 60000,
      likes: 1987,
    },
  ];

  return (
    <div className="cards-container small">
      {cards.map((card) => (
        <NewsCard key={card.id} {...card} />
      ))}
    </div>
  );
}


