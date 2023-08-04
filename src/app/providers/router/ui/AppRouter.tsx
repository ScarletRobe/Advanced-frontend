import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map((config) => (
        <Route {...config} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
