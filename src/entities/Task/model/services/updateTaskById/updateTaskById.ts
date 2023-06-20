import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Task } from '../../types/taskSchema';
import { taskActions } from '../../slice/taskSlice';

interface fetchTasksProps {
    todoId: string;
    taskId: string;
    task: {
      title: string;
      text: string;
      priority: string;
    };
}

export const updateTaskById = createAsyncThunk<Task, fetchTasksProps, ThunkConfig<string>>(
  'tasks/updateTasks',
  async ({ todoId, taskId, task }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    console.log(task);
    try {
      const response = await extra.api.put<Task>(`/todos/${todoId}/tasks?taskId=${taskId}`, task);
      console.log(response.data);
      dispatch(taskActions.updateTask(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('Не удалось редактировать подзадачу'));
    }
  },
);
