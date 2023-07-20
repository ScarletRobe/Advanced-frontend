import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import './styles/index.scss'
import { AppRouter } from "./providers/router";

const App = () => {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;