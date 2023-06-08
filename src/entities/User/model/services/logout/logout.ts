import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { User } from '../../types/user';
import { userActions } from '../../slice/userSlice';

export const logout = createAsyncThunk<User, unknown, ThunkConfig<string>>(
  'login/logout',
  async (_, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post('/logout');

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.logout());
      extra.navigate?.('');
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Ошибка при выходе из профиля'));
    }
  },
);
