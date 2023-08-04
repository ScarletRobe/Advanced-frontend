import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

import styles from "./LangSwitcher.module.scss";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <Button
      theme="clear"
      onClick={() => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
      }}
    >
      {t("language")}
    </Button>
  );
};
