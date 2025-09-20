import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const petitions = [
  {
    id: 1,
    image: "/body.jpg",
    title: "Защитим природу 🌿",
    description: "Короткое описание инициативы по защите природы.",
    author: "ivan_petrov",
    date: "19 сентября 2025",
    likes: 124,
    signatures: 456,
    goal: 1000,
    fullText: "Полный текст петиции о защите природы. Здесь можно подробно расписать проблему и предложенные решения..."
  },
  {
    id: 2,
    image: "/news2.jpg",
    title: "Новая школа 🏫",
    description: "Строительство новой школы для детей района.",
    author: "maria_sokol",
    date: "18 сентября 2025",
    likes: 87,
    signatures: 230,
    goal: 500,
    fullText: "Подробное описание инициативы о строительстве новой школы. Аргументы, цели и ожидаемые результаты..."
  },
];

const PetitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const petition = petitions.find((p) => p.id === Number(id));

  if (!petition) {
    return <h2>Петиция не найдена</h2>;
  }

  return (
    <div className="petition-detail">
      <button onClick={() => navigate(-1)}>⬅ Назад</button>
      <h1>{petition.title}</h1>
      <img src={petition.image} alt={petition.title} />
      <p><b>Автор:</b> {petition.author}</p>
      <p><b>Дата:</b> {petition.date}</p>
      <p><b>Подписей:</b> {petition.signatures} из {petition.goal}</p>
      <p><b>Лайков:</b> {petition.likes}</p>
      <div className="petition-text">
        <p>{petition.fullText}</p>
      </div>
    </div>
  );
};

export default PetitionDetail;
