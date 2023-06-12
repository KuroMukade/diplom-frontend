import React, { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { CreateTodoAsync as CreateTodo } from '../CreateTodo/CreateTodo.async';

interface CreateTodoModalProps {
   className?: string;
   isOpen?: boolean;
   onClose?: () => void;
}

export const CreateTodoModal: FC<CreateTodoModalProps> = ({ className, isOpen, onClose }) => (
    <Modal tabIndex={-1} className={className} isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <CreateTodo onSuccess={onClose} />
        </Suspense>
    </Modal>
);
