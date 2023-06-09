import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
// import { TodoItem } from 'entities/Todo';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
// import { CreateTodo } from 'features/CreateTodo';
import { TodoComponent } from 'entities/Todo';
import { deleteTodo } from 'widgets/TodoList/models/services/deleteTodo/deleteTodo';
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

  useEffect(() => {
    dispatch(fetchTodoListData());
  }, [dispatch]);

  const todoItems = useSelector(getTodoListData);
  const isLoading = useSelector(getTodoListIsLoading);
  const error = useSelector(getTodoListError);

  const onTodoDelete = useCallback((id: string) => {
    dispatch(deleteTodo({ todoId: id }));
  }, [dispatch]);

  if (isLoading) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Loader />
        </div>
    );
  }

  if (error === t('Не удалось запросить список тудушек')) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Text
                textSize={TextSize.LARGE}
                theme={TextTheme.ERROR}
                // eslint-disable-next-line max-len
                text={t('У вас еще нет созданных туду. Для начала работы необходимо иметь хотя бы 1 список дел')}
            />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Text text={t('Попробуйте перезагрузить страницу')} title={t('Произошла ошибка')} />
        </div>
    );
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          {todoItems?.map((todo) => (
              <TodoComponent
                  className={styles.todo}
                  onDelete={onTodoDelete}
                  title={todo.title}
                  id={todo._id}
                  key={todo._id}
              />
          ))}
      </div>
  );
};
