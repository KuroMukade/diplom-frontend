export interface User {
    id: string;
    email: string;
    token: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
