import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { i18n } from 'shared/config/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

interface registerByEmailProps {
    email: string;
    password: string;
}

export const registerByEmail = createAsyncThunk<User, registerByEmailProps, ThunkConfig<string>>(
  'register/registerByEmail',
  async (registerData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/register', registerData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      extra.navigate?.('/profile');
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Не удалось зарегистрироваться'));
    }
  },
);
