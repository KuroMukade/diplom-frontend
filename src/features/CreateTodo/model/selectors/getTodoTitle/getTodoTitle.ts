import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoTitle = (state: StateSchema) => state.createTodo?.title || '';
