import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskFormPriority = (state: StateSchema) => state.createTask?.priority || 'LOW';
