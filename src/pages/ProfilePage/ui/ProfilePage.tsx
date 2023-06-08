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

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  return (
      <div className={classNames(styles.wrapper, {}, [])}>
          <ProfielPageHeader />
          <ProfileCard
              onChangeUsername={onChangeUsername}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              isLoading={isLoading}
              error={error}
              data={data}
              readonly={readonly}
          />
      </div>
  );
};

export default ProfilePage;
