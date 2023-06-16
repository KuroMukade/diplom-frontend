import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskFormIsLoading = (state: StateSchema) => state.createTask?.isLoading || false;
