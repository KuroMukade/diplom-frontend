import type { StateSchema } from 'app/providers/StoreProvider';

export const getTodoListError = (state: StateSchema) => state.todoList?.error;
