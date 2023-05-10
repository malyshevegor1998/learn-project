import React from 'react'
import s from './MyInput.module.css';

function MyInput(props) {
  return (
    <input className={s.myInput} {...props} type="text" />
  )
}

export default MyInput
