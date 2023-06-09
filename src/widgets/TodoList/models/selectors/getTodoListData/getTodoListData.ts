import type { StateSchema } from 'app/providers/StoreProvider';

export const getTodoListData = (state: StateSchema) => state.todoList?.data;
