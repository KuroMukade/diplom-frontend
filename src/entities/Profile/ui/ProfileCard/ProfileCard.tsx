import { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';

import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeUsername: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeFirstname: (value?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly = false,
  onChangeLastname,
  onChangeFirstname,
  onChangeUsername,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
        <div className={classNames(styles.wrapper, { [styles.loading]: true }, [])}>
            <Loader />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classNames(styles.wrapper, {}, [styles.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Ошибка при загрузке')}
                textSize={TextSize.LARGE}
                text={t('Попробуйте обновить страницу')}
            />
        </div>
    );
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <div className={styles.profileData}>
              <div className={styles.inputWrapper}>
                  <span className={styles.inputText}>{t('Ник')}</span>
                  <Input
                      className={styles.input}
                      value={data?.username}
                      readonly={readonly}
                      onChange={onChangeUsername}
                  />
              </div>
              <div className={styles.inputWrapper}>
                  <span className={styles.inputText}>{t('Имя')}</span>
                  <Input
                      onChange={onChangeFirstname}
                      className={styles.input}
                      value={data?.firstname}
                      readonly={readonly}
                  />
              </div>
              <div className={styles.inputWrapper}>
                  <span className={styles.inputText}>{t('Фамилия')}</span>
                  <Input
                      className={styles.input}
                      value={data?.lastname}
                      onChange={onChangeLastname}
                      readonly={readonly}
                  />
              </div>
          </div>
      </div>
  );
};
