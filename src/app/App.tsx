import { Suspense, useState } from 'react';
import classNames from "classnames";

import { useTheme } from 'app/providers/ThemeProvider';
import {Navbar} from "widgets/Navbar";
import {Footer} from "widgets/Footer";
import {Main} from "pages/Main";
import {Modal} from "shared/Modal";
import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
