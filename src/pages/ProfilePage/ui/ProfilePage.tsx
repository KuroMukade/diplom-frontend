import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from 'entities/Profile';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { useSelector } from 'react-redux';
import styles from './ProfilePage.module.scss';
import ProfielPageHeader from './ProfilePageHeader/ProfiePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  useDynamicModuleLoader('profile', reducers, false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onChangeEmail = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ email: value || '' }));
  }, [dispatch]);

  const onChangePassword = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ password: value || '' }));
  }, [dispatch]);

  return (
      <div className={classNames(styles.wrapper, {}, [])}>
          <ProfielPageHeader />
          <ProfileCard
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              isLoading={isLoading}
              error={error}
              data={data}
              readonly={readonly}
          />
      </div>
  );
};

export default ProfilePage;
