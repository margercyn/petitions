// src/head.jsx
import React from "react";
import "./head.css";

export default function Head() {
  return (
    <header className="hero">
      <div className="hero-content">
        {/* Заголовок */}
        <h1 className="hero-title">
        петиции <span>для любей</span>
        </h1>

        {/* Подзаголовок */}
        <p className="hero-subtitle">
        Создавайте важные перемены. Создавайте петиции, собирайте поддержку и воплощайте
        свою страсть в действия с помощью самой надёжной платформы в мире.
        </p>

        {/* Кнопки */}
        <div className="hero-buttons">
          <button className="btn-yellow">Начать петицию</button>
          <button className="btn-outline">найти</button>
        </div>

        {/* Статистика */}
        <div className="hero-stats">
          <div>
            <h2>2.5M+</h2>
            <p>Активные пользователи</p>
          </div>
          <div>
            <h2>150K+</h2>
            <p>Успешные петиции</p>
          </div>
          <div>
            <h2>89M+</h2>
            <p>Собрано подписей</p>
          </div>
        </div>
      </div>
    </header>
  );
}
