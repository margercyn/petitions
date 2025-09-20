import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Главная", path: "/" },
    { id: 2, name: "Петиции", path: "/programs" },
    { id: 3, name: "Новости", path: "/resources" },
    { id: 4, name: "О нас", path: "/about" },
    { id: 5, name: "Контакты", path: "/contact" },
  ];

  return (
    <div id="navbar">
      {/* Логотип слева */}
      <Link to="/" className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </Link>

      {/* Меню + кнопки справа */}
      <div className="flex items-center gap-20">
        {/* Меню */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Кнопки */}
        <div className="navbar-buttons">
          <button className="btn-signin">войти</button>
          <button className="btn-getstarted">регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

