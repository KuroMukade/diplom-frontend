import type { Task } from 'entities/Task';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { todoActions } from '../../todoSlice/todoSlice';

interface FetchTodoTasksRequestProps {
    todoId: string;
}

export const fetchTodoTasks = createAsyncThunk<Task[], FetchTodoTasksRequestProps, ThunkConfig<string>>(
  'todo/fetchTodoTasks',
  async ({ todoId }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Task[]>(`/tasks?todoId=${todoId}`);
      if (!response.data) {
        throw new Error();
      }

      dispatch(todoActions.setTodoTasksData(response.data));
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Не удалось зарегистрироваться'));
    }
  },
);
