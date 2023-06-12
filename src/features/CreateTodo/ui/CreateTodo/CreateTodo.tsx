import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getTodoTitle } from '../../model/selectors/getTodoTitle/getTodoTitle';
import { createTodoActions, createTodoReducer } from '../../model/slice/todoSlice';
import { createTodo } from '../../model/services/createTodo';
import { getTodoIsLoading } from '../../model/selectors/getTodoIsLoading/getTodoIsLoading';
import { getTodoError } from '../../model/selectors/getTodoError/getTodoError';

import styles from './CreateTodo.module.scss';

interface CreateTodoProps {
   className?: string;
   onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  createTodo: createTodoReducer,
};

const CreateTodo = memo(({ className, onSuccess }: CreateTodoProps) => {
  useDynamicModuleLoader('createTodo', initialReducers, true);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const title = useSelector(getTodoTitle);
  const isLoading = useSelector(getTodoIsLoading);
  const error = useSelector(getTodoError);

  const onChangeTitle = useCallback((value: string) => {
    dispatch(createTodoActions.setTitle(value));
  }, [dispatch]);

  const onCreateTodoClick = useCallback(async () => {
    const result = await dispatch(createTodo({ title }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, title]);

  if (isLoading) {
    return (
        <div className={classNames(styles.createTodo, {}, [className])}>
            <Loader />
        </div>
    );
  }

  return (
      <div className={classNames(styles.createTodo, {}, [className])}>
          {error && (
          <Text textSize={TextSize.MEDIUM} title={t('Ошибка')} text={error} />
          )}
          <Text textSize={TextSize.LARGE} title={t('Создание todo')} />
          <Input
              placeholder={t('Название todo')}
              onChange={onChangeTitle}
              className={styles.title}
              value={title}
          />
          <Button
              growthColor={GrowthColor.PRIMARY}
              theme={ThemeButton.OUTLINE}
              onClick={onCreateTodoClick}
          >
              {t('Создать')}

          </Button>
      </div>
  );
});

export default CreateTodo;
