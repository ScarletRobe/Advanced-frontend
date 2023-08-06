import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={styles.errorPage}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
