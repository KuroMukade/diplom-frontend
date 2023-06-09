import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoReadonly = (state: StateSchema) => state.todo?.readonly || true;
