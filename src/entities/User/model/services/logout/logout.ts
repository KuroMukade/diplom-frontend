import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { User } from '../../types/user';
import { userActions } from '../../slice/userSlice';

export const logout = createAsyncThunk<unknown, unknown, ThunkConfig<string>>(
  'user/logout',
  async (_, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/logout');

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.logout());
      extra.navigate?.('/', { replace: true });
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Ошибка при выходе из профиля'));
    }
  },
);
