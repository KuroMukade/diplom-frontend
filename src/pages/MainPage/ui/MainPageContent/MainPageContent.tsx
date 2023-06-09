import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';

import styles from './MainPageContent.module.scss';

export const MainPageContent: FC = () => {
  const { t } = useTranslation('main');
  return (
      <main className={styles.wrapper}>
          <div className={styles.main}>
              <h1 className={styles.title}>
                  {t('Организуй свою работу и жизнь, вместе с TaskMate')}
              </h1>
              <p className={styles.desc}>
                  {t(`Become focused, organized, and calm with TaskMate.
              The world"s #1 task manager and to-do list app.`)}
              </p>
              <Button theme={ThemeButton.OUTLINE} growthColor={GrowthColor.SECONDARY} className={styles.btn}>
                  {t('Начать бесплатно')}
              </Button>
          </div>
          <div className={styles.risk}>
              <div className={styles.left}>
                  <p className={styles.leftText}>
                      {t('Не рискуйте. Это страшно!')}
                  </p>
              </div>
              <div className={styles.line} />
              <div className={styles.right}>
                  <p className={styles.rightText}>
                      {t('Делайте небольшие ставки. Это захватывающе!')}
                  </p>
              </div>
          </div>
          <div className={styles.stay}>
              <h2 className={styles.stayTitle}>
                  {t('Оставайтесь на пути, достигайте с легкостью')}
              </h2>
              <p className={styles.stayDesc}>
                  {t(`Более 30 миллионов человек
                  организуют миллиарды задач в TaskMate для работы, учебы и личной жизни`)}
              </p>
              <Link className={styles.link} to="/">
                  {t('Explore')}
              </Link>
          </div>
      </main>
  );
};
