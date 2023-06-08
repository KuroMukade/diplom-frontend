import React, { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { RegisterFormAsync as RegisterForm } from '../RegisterForm/RegisterForm.async';

interface RegisterModalProps {
   className?: string;
   isOpen?: boolean;
   onClose?: () => void;
}

export const RegisterModal: FC<RegisterModalProps> = ({ className, onClose, isOpen }) => (
    <Modal tabIndex={-1} onClose={onClose} isOpen={isOpen} className={className}>
        <Suspense fallback={<Loader />}>
            <RegisterForm onSuccess={onClose} />
        </Suspense>
    </Modal>
);
