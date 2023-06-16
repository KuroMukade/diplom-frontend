import { AxiosInstance } from 'axios';

import { NavigateOptions, To } from 'react-router-dom';

import {
  AnyAction, EnhancedStore, ReducersMapObject, Reducer,
} from '@reduxjs/toolkit';

import { Dispatch, CombinedState } from 'redux';

import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { TodoSchema } from 'entities/Todo';
import { TaskSchema } from 'entities/Task';

import { LoginSchema } from 'features/AuthByUsername';
import { RegisterSchema } from 'features/RegisterByEmail';
import { CreateTodoSchema } from 'features/CreateTodo';
import { CreateTaskSchema } from 'features/CreateTask';

import { TodoListSchema } from 'widgets/TodoList';

export interface StateSchema {
    user: UserSchema;
    todo: TodoSchema;
    task: TaskSchema;
    // Async reducers
    loginForm?: LoginSchema;
    registerForm?: RegisterSchema;
    profile?: ProfileSchema;
    createTodo?: CreateTodoSchema;
    createTask?: CreateTaskSchema;
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
