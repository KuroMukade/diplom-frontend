import { SelectValue } from 'shared/lib/select';

export interface Task {
    _id: string;
    title: string;
    text: string;
    priority: SelectValue;
}

export interface TaskSchema {
    tasks?: Task[];
    isLoading: boolean;
    error?: string;
}
