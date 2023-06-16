import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskFormText = (state: StateSchema) => state.createTask?.text || '';
