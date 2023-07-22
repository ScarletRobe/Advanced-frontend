import classNames from 'classnames';

import { AppLink } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({
  className,
}: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, className)}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
