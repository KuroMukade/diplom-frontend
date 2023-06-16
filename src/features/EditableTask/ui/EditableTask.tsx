import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames'

import styles from './EditableTask.module.scss'

interface EditableTaskProps {
   className?: string
}

export const EditableTask: FC<EditableTaskProps> = ({ className }) => {
   return (
      <div className={classNames(styles.wrapper, {}, [className])}>

      </div>
    )
}