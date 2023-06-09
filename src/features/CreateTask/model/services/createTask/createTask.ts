import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Task, taskActions } from 'entities/Task';

import { i18n } from 'shared/config/i18n';

interface CreateTaskProps {
    todoId: string;
    title: string;
    text: string;
    priority: string;
}

export const createTask = createAsyncThunk<Task, CreateTaskProps, ThunkConfig<string>>(
  'task/createTask',
  async (data, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<Task>(
        `/todos/${data.todoId}/tasks`,
        {
          title: data.title,
          text: data.text,
          priority: data.priority,
        },
      );

      if (!response.data) {
        throw new Error();
      }

      console.log(response);
      dispatch(taskActions.addTask(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Неверный формат'));
    }
  },
);
