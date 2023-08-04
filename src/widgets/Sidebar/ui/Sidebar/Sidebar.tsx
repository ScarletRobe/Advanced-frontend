import React, { useState } from "react";
import classNames from "classnames";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { LangSwitcher } from "widgets/LangSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: collapsed },
        className,
      )}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
