import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Task } from '../model/types/taskSchema';

import styles from './TaskComponent.module.scss';

interface TaskProps {
   className?: string;
   todoId: string;
   taskId: string;
   title: string;
   text: string;
   priority: string;
}

export const TaskComponent: FC<TaskProps> = ({
  className, todoId, priority, text, title,
}) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
      <div className={styles.task}>
          <h4 className={styles.title}>
              {title}
          </h4>
          <p className={styles.text}>
              {text}
          </p>
          <div>
            {priority}
          </div>
          <div>
              <Button
                  className={styles.btn}
                  theme={ThemeButton.OUTLINE}
                  growthColor={GrowthColor.PRIMARY}
                  onClick={() => {}}
              >
                  {t('Выполнено')}
              </Button>
          </div>
      </div>
  );
};
