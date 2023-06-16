import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Todo } from '../../types/todoSchema';

interface fetchTodoProps {
  todoId: string;
}

export const fetchTodoById = createAsyncThunk<Todo, fetchTodoProps, ThunkConfig<string>>(
  'todo/fetchTodoById',
  async (todoId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Todo>(`/todos/${todoId.todoId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о туду'));
    }
  },
);
