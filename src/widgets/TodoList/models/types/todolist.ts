import type { Todo } from 'entities/Todo';

export interface TodoListSchema {
    isLoading?: boolean;
    error?: string;
    data?: Todo[];
}
