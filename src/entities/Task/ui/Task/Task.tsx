import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Input } from 'shared/ui/Input/Input';

import type { Task as TaskType } from 'entities/Task';

import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';

import { useDispatch } from 'react-redux';
import { taskActions } from 'entities/Task/model/slice/taskSlice';
import styles from './Task.module.scss';

export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGHT = 'HIGHT',
}

interface TaskProps {
   className?: string;
   data?: TaskType;
   readonly: boolean;
   onChangeTitle?: (value: string) => void;
   onChangeDescription?: (value: string) => void;
   onChangePriority?: (value: string) => void;
   onChangeCompleted?: (value: boolean) => void;
}

export const Task: FC<TaskProps> = ({
  className,
  data,
  readonly = true,
  onChangeTitle,
  onChangeDescription,
  onChangePriority,
  onChangeCompleted,
}) => {
  const { t } = useTranslation('todo');

  const dispatch = useDispatch();

  const onCancelEdit = useCallback(() => {
    dispatch(taskActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (data) {
      dispatch(taskActions.updateTask(data));
    }
  }, [data, dispatch]);

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Input readOnly={readonly} className={styles.title} value={data?.title} />
          <Input readOnly={readonly} className={styles.description} value={data?.text} />
          <Input readOnly={readonly} className={styles.dropdown} value={data?.priority} />
          <div className={styles.extra}>
              {readonly ? (
                  <Button
                      className={styles.btn}
                      theme={ThemeButton.FILL}
                      growthColor={GrowthColor.SECONDARY}
                  >
                      {t('Изменить')}
                  </Button>
              ) : (
                  <div className={styles.optionsBtns}>
                      <Button onClick={onCancelEdit}>
                          {t('Отмена')}
                      </Button>
                      <Button
                          theme={ThemeButton.OUTLINE}
                          growthColor={GrowthColor.SECONDARY}
                          onClick={onSave}
                      >
                          {t('Сохранить')}
                      </Button>
                  </div>
              )}
              <Checkbox isChecked={data?.completed} />
          </div>
      </div>
  );
};
