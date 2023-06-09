import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Todo } from 'entities/Todo';
import { i18n } from 'shared/config/i18n';

export const fetchTodoListData = createAsyncThunk<Todo[], void, ThunkConfig<string>>(
  'todoList/fetchTodoData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Todo[]>('/todos');
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить список тудушек'));
    }
  },
);
