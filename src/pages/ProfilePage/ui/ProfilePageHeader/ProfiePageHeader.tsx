import React, { FC, memo, useCallback } from 'react';

import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './ProfiePageHeader.module.scss';

interface ProfilePageHeaderProps {}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = () => {
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  const { t } = useTranslation('profile');
  return (
      <div className={styles.profileHeader}>
          <Text title={t('Профиль')} textSize={TextSize.LARGE} />
          {readonly ? (
              <Button
                  onClick={onEdit}
                  growthColor={GrowthColor.PRIMARY}
                  theme={ThemeButton.OUTLINE}
              >
                  {t('Редактировать профиль')}
              </Button>
          ) : (
              <div className={styles.optionsBtns}>
                  <Button onClick={onCancelEdit}>
                      {t('Отмена')}
                  </Button>
                  <Button theme={ThemeButton.OUTLINE} growthColor={GrowthColor.SECONDARY} onClick={onSave}>
                      {t('Сохранить')}
                  </Button>
              </div>
          )}
      </div>
  );
};

export default memo(ProfilePageHeader);
