import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map((config) => (
      <Route
        {...config}
        key={config.path}
        element={
          <Suspense fallback={<PageLoader />}>{config.element}</Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
