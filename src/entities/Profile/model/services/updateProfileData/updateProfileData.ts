import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { i18n } from 'shared/config/i18n';

import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.patch<Profile>('/user', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось обновить информацию о пользователе'));
    }
  },
);
