import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';

import { Input } from 'shared/ui/Input/Input';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import SelectComponent from 'shared/ui/Select/Select';
import { SelectOptions } from 'shared/lib/select';
import { createTaskActions, createTaskReducer } from '../../model/slice/createTaskSlice';
import { getTaskFormTitle } from '../../model/selectors/getTaskFormTitle/getTaskFormTitle';
import { getTaskFormText } from '../../model/selectors/getTaskFormText/getTaskFormText';
import { getTaskFormPriority } from '../../model/selectors/getTaskFormPriority/getTaskFormPriority';
import { getTaskFormIsLoading } from '../../model/selectors/getTaskFormIsLoading/getTaskFormIsLoading';
import { getTaskFormError } from '../../model/selectors/getTaskFormError/getTaskFormError';

import styles from './CreateTaskForm.module.scss';
import { createTask } from '../../model/services/createTask/createTask';

interface CreateTaskFormProps {
   className?: string;
   todoId: string;
   onSuccess?: () => void;
}

const reducers: ReducersList = {
  createTask: createTaskReducer,
};

export const CreateTaskForm = memo(({ className, onSuccess, todoId }: CreateTaskFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const title = useSelector(getTaskFormTitle);
  const text = useSelector(getTaskFormText);
  const priority = useSelector(getTaskFormPriority);
  const isLoading = useSelector(getTaskFormIsLoading);
  const error = useSelector(getTaskFormError);

  useDynamicModuleLoader('createTask', reducers, true);

  const onCreateTaskClick = useCallback(async () => {
    const result = await dispatch(createTask({
      todoId,
      priority,
      title,
      text,
    }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, priority, text, title, todoId]);

  const onChangeTitle = useCallback((value: string) => {
    dispatch(createTaskActions.setTitle(value));
  }, [dispatch]);

  const onChangeText = useCallback((value: string) => {
    dispatch(createTaskActions.setText(value));
  }, [dispatch]);

  const onChangePriority = useCallback((value: string) => {
    dispatch(createTaskActions.setPriority(value));
  }, [dispatch]);

  const selectOptions: SelectOptions[] = [
    {
      label: 'Маленький',
      value: 'LOW',
    },
    {
      label: 'Средний',
      value: 'MEDIUM',
    },
    {
      label: 'Срочно',
      value: 'HIGH',
    },
  ];

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Text
              textSize={TextSize.LARGE}
              theme={TextTheme.CLEAR}
              className={styles.title}
              title={t('Создание задачи')}
          />
          {error && <Text theme={TextTheme.ERROR} text={error} />}
          <div className={styles.inputWrapper}>
              <Input
                  onChange={onChangeTitle}
                  value={title}
                  placeholder={t('Название задачи')}
              />
              <Input
                  onChange={onChangeText}
                  value={text}
                  placeholder={t('Содержимое задачи')}
              />
              {/* <Input
                  onChange={onChangePriority}
                  value={priority}
                  placeholder={t('Приоритет задачи')}
              /> */}
              <SelectComponent
                  defaultValue={{ label: 'Маленький', value: 'LOW' }}
                  selectOptions={selectOptions}
                  onChange={(item) => onChangePriority(item.value)}
              />
          </div>
          <Button
              disabled={isLoading}
              onClick={onCreateTaskClick}
              className={styles.btn}
              theme={ThemeButton.OUTLINE}
              growthColor={GrowthColor.DEFAULT}
          >
              {t('Создать задачу')}

          </Button>
      </div>
  );
});

export default CreateTaskForm;
