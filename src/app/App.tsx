import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { useTheme } from "app/providers/ThemeProvider";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;