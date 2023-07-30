import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={<div>Loading locales</div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
