export { taskActions, taskReducer } from './model/slice/taskSlice';
export { getTaskIsLoading } from './model/selectors/getTaskIsLoading/getTaskIsLoading';
export { getTaskError } from './model/selectors/getTaskError/getTaskError';
export { getTasks } from './model/selectors/getTasks/getTasks';
export { fetchTasks } from './model/services/fetchTasks/fetchTasks';

export type { TaskSchema, Task } from './model/types/taskSchema';

export { TaskComponent } from './ui/TaskComponent';
