import React, {useState} from 'react'
import classNames from "classnames";
import cls from './CardSub.module.scss'
import DeleteIcon from 'shared/assets/icons/delete.svg'
import ChangeIcon from 'shared/assets/icons/change.svg'
import {Modal} from "shared/Modal";
interface CardSubProps {
  className?: string
}
export const CardSub  = ({className}: CardSubProps) => {
  const [isOpenDeleteModel, setIsOpenDeleteModal] = useState(false)
  const [isOpenChangeModal, setIsOpenChangeModal] = useState(false)
  return (
    <div className={classNames(cls.CardSub, cls[className])}>
      <div className={classNames(cls.LeftInfo)}>
        <div className={classNames(cls.Logo)}>N</div>
        <div>Netflix</div>
      </div>
      <div className={classNames(cls.RightInfo)}>
        <div>5.99<span>$</span></div>
        <div>04/08/2023</div>
        <button
          className={classNames(cls.Icon)}
          onClick={() => setIsOpenDeleteModal(true)}
          type="button"><DeleteIcon/>
        </button>
        <Modal isOpen={isOpenDeleteModel} onClose={() => setIsOpenDeleteModal(false)}>
          <h2 className={classNames(cls.DeleteTitle)}>Want to delete?</h2>
          <div className={classNames(cls.ConfirmBlock)}>
            <button className={classNames(cls.Confirm)}>YES</button>
            <button className={classNames(cls.Confirm, cls.No)}>NO</button>
          </div>
        </Modal>
        <button
          className={classNames(cls.Icon)}
          onClick={() => setIsOpenChangeModal(true)}
          type='button' ><ChangeIcon />
        </button>
        <Modal isOpen={isOpenChangeModal} onClose={() => setIsOpenChangeModal(false)}>
          Change
        </Modal>
      </div>
    </div>
  );
}