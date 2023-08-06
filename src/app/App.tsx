import { Suspense, useEffect } from "react";
import classNames from "classnames";

import { useTheme } from "app/providers/ThemeProvider";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
