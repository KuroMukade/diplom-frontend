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
  getProfileForm,
  profileActions,
  profileReducer,
} from 'entities/Profile';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { useSelector } from 'react-redux';
import ProfielPageHeader from './ProfilePageHeader/ProfiePageHeader';

import styles from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  useDynamicModuleLoader('profile', reducers, false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const formData = useSelector(getProfileForm);
  const readonly = useSelector(getProfileReadonly);

  const onChangeEmail = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ email: value || '' }));
  }, [dispatch]);

  return (
      <div className={classNames(styles.wrapper, {}, [])}>
          <ProfielPageHeader />
          <ProfileCard
              onChangeEmail={onChangeEmail}
              isLoading={isLoading}
              error={error}
              data={formData}
              readonly={readonly}
          />
      </div>
  );
};

export default ProfilePage;
