export interface CreateTaskSchema {
    title: string;
    text: string;
    priority: string;

    isLoading: boolean;
    error?: string;
}
