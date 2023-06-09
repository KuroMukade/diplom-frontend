import type { StateSchema } from 'app/providers/StoreProvider';

export const getTodoListIsLoading = (state: StateSchema) => state.todoList?.isLoading || false;
