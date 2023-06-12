import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
// import { TodoItem } from 'entities/Todo';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
// import { CreateTodo } from 'features/CreateTodo';
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
  const { t } = useTranslation();
  useDynamicModuleLoader('todoList', reducers, false);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodoListData());
  // }, [dispatch]);

  // const todoItems = useSelector(getTodoListData);
  // const isLoading = useSelector(getTodoListIsLoading);
  // const error = useSelector(getTodoListError);

  // if (isLoading) {
  //   return (
  //       <div className={classNames(styles.wrapper, {}, [className])}>
  //           <Loader />
  //       </div>
  //   );
  // }

  // if (error) {
  //   return (
  //       <div className={classNames(styles.wrapper, {}, [className])}>
  //           <Text text={t('Попробуйте перезагрузить страницу')} title={t('Произошла ошибка')} />
  //       </div>
  //   );
  // }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          {/* <CreateTodo /> */}
      </div>
  );
};
