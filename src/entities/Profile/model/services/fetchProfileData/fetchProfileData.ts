import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Profile>('/user');
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о пользователе'));
    }
  },
);
