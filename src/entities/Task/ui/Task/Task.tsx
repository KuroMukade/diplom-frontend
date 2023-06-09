import React, { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames';

import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

import type { Task as TaskType } from 'entities/Task';
import styles from './Task.module.scss';

export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGHT = 'HIGHT',
}

interface TaskProps {
   className?: string;
    data?: TaskType;
   onChangeTitle?: (value: string) => void;
   onChangeDescription?: (value: string) => void;
   onChangePriority?: (value: string) => void;
   onChangeCompleted?: (value: boolean) => void;
}

export const Task: FC<TaskProps> = ({
  className,
  data,
  onChangeTitle,
  onChangeDescription,
  onChangePriority,
  onChangeCompleted,
}) => {
  console.log(data);
  console.log('asdsad');
  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <input className={styles.title} value={data?.title} />
          <input className={styles.description} value={data?.text} />
          <input className={styles.dropdown} value={data?.priority} />
          <Checkbox isChecked={data?.completed} />
      </div>
  );
};
