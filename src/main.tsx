import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import TerminalBootLoader from './components/TerminalBootLoader/TerminalBootLoader';
import { bootAudio } from './utils/bootAudio';
import './index.css';

const unlockAudio = () => {
  bootAudio.unlock();
  window.removeEventListener('pointerdown', unlockAudio);
  window.removeEventListener('keydown', unlockAudio);
  window.removeEventListener('touchstart', unlockAudio);
  window.removeEventListener('wheel', unlockAudio);
};

window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });
window.addEventListener('touchstart', unlockAudio, { once: true });
window.addEventListener('wheel', unlockAudio, { once: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TerminalBootLoader>
      <App />
    </TerminalBootLoader>
  </StrictMode>,
);
