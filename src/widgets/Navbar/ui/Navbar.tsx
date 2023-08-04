import { t } from "i18next";
import classNames from "classnames";

import { AppLink } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar, className)}>
    <div className={styles.links}>
      <AppLink to="/">{t("Главная")}</AppLink>
      <AppLink to="/about">{t("О сайте")}</AppLink>
    </div>
  </div>
);
