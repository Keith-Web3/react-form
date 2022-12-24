import React from 'react'

export default function InputField({
  label,
  type,
  id,
  name,
  text,
  handleInput,
  placeHolder,
  value,
}) {
  return (
    <label htmlFor={label}>
      {text}
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleInput}
        placeholder={placeHolder}
        value={value ?? ''}
      ></input>
    </label>
  )
}
