import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoError = (state: StateSchema) => state.todo?.error;
