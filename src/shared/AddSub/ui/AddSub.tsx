import React, {useContext, useState} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddSubSchema, color, ISubForm } from "./types";
import { CirclePicker } from 'react-color';
import cls from './AddSub.module.scss'
import classNames from "classnames";
import { Modal } from "shared/Modal";
import {nanoid} from "nanoid";
import {SubContext} from "app/providers/SubProvider";
import {LOCAL_STORAGE_SUB_KEY} from "app/providers/SubProvider/lib/SubContext";


interface AddSubProps {
  className?: string
}

export const AddSub  = ({className}: AddSubProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState(color[0])
  const {value, setValue} = useContext(SubContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({ mode: 'onChange', resolver: yupResolver(AddSubSchema) });

  const handleSubmitForm: SubmitHandler<ISubForm> = (data) => {
    data.id = nanoid()
    data.color = currentColor
    setValue([...value, data])
    reset()
  }

  const handleChangeComplete = (color: { hex: React.SetStateAction<string>; }) => {
    setCurrentColor(color.hex)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} type="button" className={classNames(cls.AddSub, className)}>Add Sub</button>
      <Modal className={classNames(cls.Modal)} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Add new subscription</h2>
        <form
          id='formAddSub'
          className={classNames(cls.Form)}
          onSubmit={handleSubmit(handleSubmitForm)}
          autoFocus={true}>
          <div className={classNames(cls.InputWrapper)}>
            <label className={classNames(cls.Label)} htmlFor="name">Subscription name:</label>
            <input
              className={classNames(cls.Input)}
              autoComplete={'new-password'}
              id='name'
              type="text"
              placeholder='Subscription name...'
              {...register("name")}
            />
          </div>
          <div className={classNames(cls.InputWrapper)}>
            <label className={classNames(cls.Label)} htmlFor="price">Price:</label>
            <input
              className={classNames(cls.Input)}
              autoComplete={'new-password'}
              id='price'
              type="text"
              placeholder='Price...'
              {...register("price")}
            />
          </div>
          <div className={classNames(cls.InputWrapper)}>
            <label className={classNames(cls.Label)} htmlFor="date">Subscription end date:</label>
            <input
              id='date'
              className={classNames(cls.Input)}
              type="date"
              placeholder='Subscription end date...'
              {...register("date")}
            />
          </div>
          <div className={classNames(cls.ColorWrapper)}>
            <p>Choose color logo:</p>
            <CirclePicker
              color={currentColor}
              colors={color}
              width={'500'}
              onChangeComplete={handleChangeComplete}
              className={classNames(cls.ColorPicker)}
            />
          </div>
        </form>
        <button className={classNames(cls.Button, 'btn')} form='formAddSub' type="submit">Add</button>
      </Modal>
    </>
  );
}
