export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export interface Task {
    id?: string;
    completed?: boolean;
    title?: string;
    text?: string;
    priority?: TaskPriority;
}

export interface TaskSchema {
    data?: Task;
    form?: Task;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}
