export interface Profile {
    email?: string;
    password?: string;
    totalTasks?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}
