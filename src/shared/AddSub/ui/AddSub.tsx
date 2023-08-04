import React, {useState} from 'react'
import classNames from "classnames";
import cls from './AddSub.module.scss'
import {Modal} from "shared/Modal";

interface AddSubProps {
  className?: string
}
export const AddSub  = ({className}: AddSubProps) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(className)
  return (
    <>
      <button onClick={() => setIsOpen(true)} type="button" className={classNames(cls.AddSub, [className])}>Add Sub</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        5555
      </Modal>
    </>
);
}
