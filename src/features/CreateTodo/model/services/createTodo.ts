import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Todo } from 'entities/Todo';
import { i18n } from 'shared/config/i18n';

interface createTodoProps {
    title: string;
}

export const createTodo = createAsyncThunk<Todo, createTodoProps, ThunkConfig<string>>(
  'todo/createTodo',
  async (todoData, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<Todo>('/todos', todoData);
      if (!response.data) {
        throw new Error();
      }

      extra.navigate?.('/todo');
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось создать todo'));
    }
  },
);
