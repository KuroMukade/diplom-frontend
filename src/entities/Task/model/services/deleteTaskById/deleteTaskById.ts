import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Task } from '../../types/taskSchema';
import { taskActions } from '../../slice/taskSlice';

interface fetchTasksProps {
    todoId: string;
    taskId: string;
}

export const deleteTaskById = createAsyncThunk<Task, fetchTasksProps, ThunkConfig<string>>(
  'tasks/deleteTasks',
  async ({ todoId, taskId }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.delete<Task>(`/todos/${todoId}/${taskId}`);
      dispatch(taskActions.deleteTask(response.data._id));

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось удалить подзадачу'));
    }
  },
);
