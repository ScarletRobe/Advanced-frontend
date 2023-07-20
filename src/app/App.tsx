import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app', theme)}>
      <Navbar />
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;