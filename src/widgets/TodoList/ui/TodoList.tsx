import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TodoItem } from 'entities/Todo';
import { fetchTodoListData } from '../models/services/fetchTodoListData/fetchTodoListData';
import { getTodoListData } from '../models/selectors/getTodoListData/getTodoListData';
import { getTodoListIsLoading } from '../models/selectors/getTodoListIsLoading/getTodoListIsLoading';
import { getTodoListError } from '../models/selectors/getTodoListError/getTodoListError';

import styles from './TodoList.module.scss';
import { todoListReducer } from '../models/slice/todoListSlice';

const reducers: ReducersList = {
  todoList: todoListReducer,
};

interface TodoListProps {
   className?: string
}

export const TodoList: FC<TodoListProps> = ({ className }) => {
  useDynamicModuleLoader('todoList', reducers, false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoListData());
  }, [dispatch]);

  const todoItems = useSelector(getTodoListData);
  const isLoading = useSelector(getTodoListIsLoading);
  const error = useSelector(getTodoListError);

  if (isLoading) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Loader />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Loader />
        </div>
    );
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          {todoItems?.map((item, index) => (<TodoItem id={item._id} key={item._id} title={item.title} />))}
      </div>
  );
};
