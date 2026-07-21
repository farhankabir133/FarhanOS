import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import TerminalBootLoader from './components/TerminalBootLoader/TerminalBootLoader';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TerminalBootLoader>
      <App />
    </TerminalBootLoader>
  </StrictMode>,
);
