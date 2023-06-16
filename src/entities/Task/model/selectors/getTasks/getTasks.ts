import { StateSchema } from 'app/providers/StoreProvider';

export const getTasks = (state: StateSchema) => state?.task?.tasks;
