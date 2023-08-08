import React, { ReactNode } from 'react';
import classNames from "classnames";
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

enum Key {
  ESCAPE = 'Escape'
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === Key.ESCAPE) {
      console.log(1)
      closeHandler()
    }
  }


  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };
  return (
    <div onKeyDown={(e) => handleKeyDown(e)}  className={classNames(cls.Modal, mods)} >
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={classNames(cls.content, [className])} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
