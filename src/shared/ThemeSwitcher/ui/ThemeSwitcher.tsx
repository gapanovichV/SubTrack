import {ReactElement} from "react";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import {useTheme} from "app/providers/ThemeProvider";
import classNames from "classnames";
import cls from './ThemeSwitcher.module.scss'


export const  ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.ThemeSwitcher)}>
      <div>dark</div>
      <div className={classNames(cls.Toggle)}>
        <DarkModeToggle
        mode={theme}
        size='sm'
        onChange={toggleTheme}
      />
      </div>
      <div>light</div>
    </div>
  );
}