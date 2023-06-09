import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Task } from '../../types/task';

export interface TaskQueryProps {
  todoId: string;
}

export const fetchProfileData = createAsyncThunk<Task, { todoId: string }, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async ({ todoId }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Task>(`/tasks/?todoId=${todoId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о задаче'));
    }
  },
);
