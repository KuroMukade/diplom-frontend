import { Task } from 'entities/Task';

export interface Todo {
    _id: string;
    title: string;
    user: string;
}

export interface TodoSchema {
    data?: Todo;
    form?: Todo;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    tasks?: Task[];
}
