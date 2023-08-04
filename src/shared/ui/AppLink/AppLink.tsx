import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import styles from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { theme } = useTheme();
  const { to, className, children, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(
        styles.AppLink,
        { [styles.secondary]: theme === Theme.LIGHT },
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
