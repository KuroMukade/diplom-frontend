import { StateSchema } from 'app/providers/StoreProvider';

export const getTaskIsLoading = (state: StateSchema) => state?.task?.isLoading;
