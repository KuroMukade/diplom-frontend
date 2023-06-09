import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { Input } from 'shared/ui/Input/Input';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import { useTranslation } from 'react-i18next';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getRegisterEmail } from '../../model/selectors/getRegisterEmail/getRegisterEmail';
import { getRegisterPassword } from '../../model/selectors/getRegisterPassword/getRegisterPassword';
import { getRegisterIsLoading } from '../../model/selectors/getRegisterIsLoading/getRegisterIsLoading';
import { getRegisterError } from '../../model/selectors/getRegisterError/getRegisterError';

import { registerActions, registerReducer } from '../../model/slice/registerSlice';
import { registerByEmail } from '../../model/services/registerByEmail/registerByEmail';

import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
   className?: string;
   onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  registerForm: registerReducer,
};

const RegisterForm = memo(({ className, onSuccess }: RegisterFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const email = useSelector(getRegisterEmail);
  const password = useSelector(getRegisterPassword);
  const isLoading = useSelector(getRegisterIsLoading);
  const error = useSelector(getRegisterError);

  useDynamicModuleLoader('registerForm', initialReducers, true);

  const onChangePassword = useCallback((value: string) => {
    dispatch(registerActions.setPassword(value));
  }, [dispatch]);

  const onChangeEmail = useCallback((value: string) => {
    dispatch(registerActions.setEmail(value));
  }, [dispatch]);

  const onRegisterClick = useCallback(async () => {
    const result = await dispatch(registerByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, email, password, onSuccess]);

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Text theme={TextTheme.CLEAR} className={styles.title} title={t('Регистрация')} />
          {error && <Text theme={TextTheme.ERROR} text={error} />}
          <div className={styles.inputWrapper}>
              <Input
                  tabIndex={-1}
                  className={styles.username}
                  value={email}
                  placeholder={t('Почта')}
                  onChange={onChangeEmail}
                  type="text"
              />
              <Input
                  tabIndex={-2}
                  className={styles.password}
                  value={password}
                  placeholder={t('Пароль')}
                  onChange={onChangePassword}
                  type="password"
              />
          </div>
          <Button
              growthColor={GrowthColor.DEFAULT}
              className={styles.btn}
              disabled={isLoading}
              onClick={onRegisterClick}
              theme={ThemeButton.OUTLINE}
          >
              {t('Зарегистрироваться')}
          </Button>
      </div>
  );
});

export default RegisterForm;
