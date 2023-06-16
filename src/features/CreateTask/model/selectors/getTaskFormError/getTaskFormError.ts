import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskFormError = (state: StateSchema) => state.createTask?.error;
