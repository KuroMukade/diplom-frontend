import logo from 'shared/assets/images/taskmate.png';

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';

import { getUserAuthData, userActions } from 'entities/User';

import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';

import { RegisterModal } from 'features/RegisterByEmail';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const onToggleRegister = useCallback(() => {
    setRegisterOpen((prev) => !prev);
  }, []);

  const onToggleAuth = useCallback(() => {
    setAuthOpen((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Link to="/">
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <img className={styles.logo} src={logo} alt="taskmate-logo" />
            </Link>
            <Button
                growthColor={GrowthColor.PRIMARY}
                theme={ThemeButton.OUTLINE}
                onClick={onLogout}
            >
                {t('Выйти')}

            </Button>
        </div>
    );
  }

  return (
      <header className={classNames(styles.navbar, {}, [className])}>
          <div className={styles.logo}>
              <Link to="/">
                  {/* eslint-disable-next-line i18next/no-literal-string */}
                  <img src={logo} alt="taskmate-logo" />
              </Link>
          </div>
          <div className={styles.btns}>
              <Button
                  theme={ThemeButton.FILL}
                  onClick={onToggleRegister}
              >
                  {t('Регистрация')}
              </Button>
              <Button
                  theme={ThemeButton.OUTLINE}
                  onClick={onToggleAuth}
              >
                  {t('Вход')}
              </Button>
          </div>
          <LoginModal isOpen={isAuthOpen} onClose={onToggleAuth} />
          <RegisterModal isOpen={isRegisterOpen} onClose={onToggleRegister} />
      </header>
  );
};
