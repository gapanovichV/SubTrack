import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import {SubProvider} from "app/providers/SubProvider";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <SubProvider>
        <App />
      </SubProvider>
    </ThemeProvider>
  </BrowserRouter>,
);