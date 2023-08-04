import React from 'react'
import classNames from "classnames";
import cls from './Main.module.scss'
import {AddSub} from "shared/AddSub";
import {CardSub} from "shared/CardSub";

interface MainProps {
  className?: string
}
export const Main  = ({className}: MainProps) => {
  return (
    <div className={classNames(cls.Main, className)}>
      <div className={classNames(cls.Wrapper)}>
        <AddSub className={classNames(cls.AddSub)} />
        <div className={classNames(cls.List)}>
          <CardSub className={classNames(cls.Card)} />
        </div>
        <div className={classNames(cls.Info)}>Info</div>
      </div>
    </div>
  );
}