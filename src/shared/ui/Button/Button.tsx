import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

const ThemeVariants = ['clear'] as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: (typeof ThemeVariants)[number];
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(styles.button, styles[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
