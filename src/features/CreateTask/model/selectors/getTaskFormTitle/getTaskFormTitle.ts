import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskFormTitle = (state: StateSchema) => state.createTask?.title || '';
