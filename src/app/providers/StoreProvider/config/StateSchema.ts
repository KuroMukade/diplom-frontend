import {
  AnyAction, EnhancedStore, ReducersMapObject, Reducer,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { Dispatch, CombinedState } from 'redux';
import { NavigateOptions, To } from 'react-router-dom';
import { RegisterSchema } from 'features/RegisterByEmail';
import { CreateTodoSchema } from 'features/CreateTodo';
import { TodoListSchema } from 'widgets/TodoList';
import { TodoSchema } from 'entities/Todo';

export interface StateSchema {
    user: UserSchema;
    todo: TodoSchema;
    // Async reducers
    loginForm?: LoginSchema;
    registerForm?: RegisterSchema;
    profile?: ProfileSchema;
    createTodo?: CreateTodoSchema;
    todoList?: TodoListSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}
