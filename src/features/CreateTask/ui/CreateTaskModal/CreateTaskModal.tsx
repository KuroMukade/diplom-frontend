import React, { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { CreateTaskForm } from '../CreateTaskForm/CreateTaskForm.async';

interface CreateTaskModalProps {
   className?: string;
   todoId: string;
   isOpen: boolean;
   onClose?: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  className, onClose, todoId, isOpen,
}) => (
    <Modal isOpen={isOpen} tabIndex={-1} onClose={onClose} className={className}>
        <Suspense fallback={<Loader />}>
            <CreateTaskForm todoId={todoId} onSuccess={onClose} />
        </Suspense>
    </Modal>
);
