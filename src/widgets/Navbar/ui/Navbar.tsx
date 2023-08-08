import classNames from "classnames";
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from "shared/ThemeSwitcher";

interface NavbarProps {
}


export const Navbar = ({}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.logo}>SubTrack</div>
      <div className={classNames(cls.NavbarRight)}>
        <ThemeSwitcher />
        <button type="button" className={cls.Login}>Login</button>
      </div>
    </div>
  );
}