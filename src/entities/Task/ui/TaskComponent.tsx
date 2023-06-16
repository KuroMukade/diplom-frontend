import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../model/types/taskSchema';

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

  return (
      <div>
          {title}
      </div>
  );
};
