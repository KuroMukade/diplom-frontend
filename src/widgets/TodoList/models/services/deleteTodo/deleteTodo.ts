import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Todo } from '../../../../../entities/Todo/model/types/todoSchema';

interface deleteProps {
  todoId: string;
}

export const deleteTodo = createAsyncThunk<Todo[], deleteProps, ThunkConfig<string>>(
  'todo/deleteTodo',
  async (todoId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.delete<Todo[]>(`/todos/${todoId.todoId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о туду'));
    }
  },
);
