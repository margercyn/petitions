import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import "./fittul.css";

const Filtul = () => {
  const topics = [
    "Climate Action",
    "Human Rights",
    "Education Reform",
    "Healthcare",
    "Animal Welfare",
  ];

  return (
    <div className="filtul-container">
      {/* Верхняя панель */}
      <div className="filtul-top">
        {/* Поиск */}
        <div className="filtul-search">
          <input
            type="text"
            placeholder="Search for petitions, causes, or keywords..."
          />
          <button className="filtul-search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Категории */}
        <select className="filtul-categories">
          <option>All Categories</option>
          <option>Climate Action</option>
          <option>Human Rights</option>
          <option>Education Reform</option>
          <option>Healthcare</option>
          <option>Animal Welfare</option>
        </select>

        {/* Кнопка */}
        <button className="filtul-start-btn">
          <FaPlus className="me-2" /> Start Petition
        </button>
      </div>

      {/* Популярные темы */}
      <div className="filtul-bottom">
        <span className="topics-label">Popular topics:</span>
        <div className="topics-list">
          {topics.map((topic, index) => (
            <span key={index} className="topic-tag">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtul;
