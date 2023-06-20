import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import SelectComponent from 'shared/ui/Select/Select';
import { SelectOptions, SelectValue, createSelectItem } from 'shared/lib/select';

import styles from './TaskComponent.module.scss';
import { deleteTaskById } from '../model/services/deleteTaskById/deleteTaskById';
import { updateTaskById } from '../model/services/updateTaskById/updateTaskById';

interface TaskProps {
   className?: string;
   todoId: string;
   taskId: string;
   title: string;
   text: string;
   priority: SelectValue;
}

export const TaskComponent: FC<TaskProps> = ({
  className, todoId, priority, text, title, taskId,
}) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onTaskDelete = useCallback(() => {
    dispatch(deleteTaskById({ todoId, taskId }));
  }, [dispatch, taskId, todoId]);

  const selectedOption = createSelectItem(priority);

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

  const onSelectChange = useCallback((item: SelectOptions) => {
    dispatch(updateTaskById({
      todoId,
      taskId,
      task: {
        priority: item.value,
        text,
        title,
      },
    }));
  }, [dispatch, taskId, text, title, todoId]);

  return (
      <div className={styles.task}>
          {}
          <h4 className={styles.title}>
              {title}
          </h4>
          <p className={styles.text}>
              {text}
          </p>
          <div>
              <SelectComponent
                  onChange={onSelectChange}
                  selectOptions={selectOptions}
                  defaultValue={selectedOption}
              />
          </div>
          <div className={styles.btns}>
              <Button
                  className={styles.btn}
                  theme={ThemeButton.OUTLINE}
                  growthColor={GrowthColor.PRIMARY}
                  onClick={onTaskDelete}
              >
                  {t('Выполнено')}
              </Button>
          </div>
      </div>
  );
};
