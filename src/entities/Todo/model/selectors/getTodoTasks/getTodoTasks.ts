import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoTasks = (state: StateSchema) => state.todo?.tasks;
