export interface Task {
    _id: string;
    title: string;
    text: string;
    priority: string;
}

export interface TaskSchema {
    tasks?: Task[];
    isLoading: boolean;
    error?: string;
}
