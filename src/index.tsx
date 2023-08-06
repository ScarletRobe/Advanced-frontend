import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ErrorPage } from "pages/ErrorPage";
import App from "./app/App";

import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root"),
);
