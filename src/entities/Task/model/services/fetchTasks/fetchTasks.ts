import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Task } from '../../types/taskSchema';

interface fetchTasksProps {
    todoId: string;
}

export const fetchTasks = createAsyncThunk<Task[], fetchTasksProps, ThunkConfig<string>>(
  'tasks/fetchTasks',
  async ({ todoId }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Task[]>(`/todos/${todoId}/tasks`);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о подзадачах'));
    }
  },
);
