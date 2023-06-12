import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
      <div className={styles.notFoundPage}>
          <Text textSize={TextSize.LARGE} theme={TextTheme.ERROR} title={t('Страница не найдена')} />

          <Button
              onClick={() => navigate('/')}
              growthColor={GrowthColor.SECONDARY}
              theme={ThemeButton.OUTLINE}
              className={styles.btn}
          >
              {t('Вернуться на главную')}
          </Button>
      </div>
  );
};

export default NotFoundPage;
