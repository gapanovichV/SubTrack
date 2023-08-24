import React, {useContext, useState} from 'react'
import classNames from "classnames";
import cls from './CardSub.module.scss'
import DeleteIcon from 'shared/assets/icons/delete.svg'
import ChangeIcon from 'shared/assets/icons/change.svg'
import {Modal} from "shared/Modal";
import {SubContext} from "app/providers/SubProvider";
import {ISubForm} from "shared/AddSub/ui/types";

interface CardSubProps {
  className?: string
  value?: ISubForm,
}
export const CardSub: React.FC<CardSubProps>  = ({className}) => {
  const [isOpenDeleteModel, setIsOpenDeleteModal] = useState(false)
  const [isOpenChangeModal, setIsOpenChangeModal] = useState(false)
  const [idDel, setIdDel] = useState('')
  const {value, setValue} = useContext(SubContext);

  const handleClickDelete = (id :string) => {
    setIsOpenDeleteModal(true)
    setIdDel(id)
  }

  const handleConfirmDelete = (idDel: string) => {
    const newArray  = value.filter(({id}) => id != idDel)
    setIsOpenDeleteModal(false)
    setValue(newArray)
  }

  return (
    value.map((value) => (
      <div key={value.id} className={classNames(cls.CardSub, cls[className])}>
        <div className={classNames(cls.LeftInfo)}>
          <div className={classNames(cls.Logo)} style={{background: value.color}}>{value.name.charAt(0).toUpperCase()}</div>
          <div>{value.name}</div>
        </div>
        <div className={classNames(cls.RightInfo)}>
          <div>{value.price}<span>$</span></div>
          <div>{value.date}</div>
          <button
            className={classNames(cls.Icon)}
            onClick={() => handleClickDelete(value.id)}
            type="button"><DeleteIcon/>
          </button>
          <Modal isOpen={isOpenDeleteModel} onClose={() => setIsOpenDeleteModal(false)}>
            <h2 className={classNames(cls.DeleteTitle)}>Want to delete?</h2>
            <div className={classNames(cls.ConfirmBlock)}>
              <button onClick={() => handleConfirmDelete(idDel)} className={classNames(cls.Confirm)}>YES</button>
              <button onClick={() => setIsOpenDeleteModal(false)} className={classNames(cls.Confirm, cls.No)}>NO</button>
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
      )
    )
  )
}