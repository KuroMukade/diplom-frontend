import { Task } from 'entities/Task';

export interface Todo {
    _id: string;
    title: string;
    tasks: Task[];
}

export interface TodoSchema {
    todoData?: Todo;
    isLoading: boolean;
    error?: string;
}
