import './index.css';

import ErrorBoundary from '@components/ErrorBoundary/index.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import KanbanBoard from '@/pages/KanbanBoard';
import NotFound from '@/pages/NotFound';

import store from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<KanbanBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
