import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoForm = (state: StateSchema) => state.todo?.form;
