import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoData = (state: StateSchema) => state.todo.todoData;
