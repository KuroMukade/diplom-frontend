import { StateSchema } from 'app/providers/StoreProvider';

export const getTodoIsLoading = (state: StateSchema) => state.createTodo?.isLoading;
