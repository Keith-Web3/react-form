import React from 'react'
import InputField from './resuables/InputField'
import '../Sass/step_one.scss'

export default function StepOne({ handleInput, formData }) {
  class InputInfo {
    constructor(label, text, type, placeHolder) {
      this.label = label
      this.text = text
      this.type = type
      this.id = label
      this.name = label
      this.placeHolder = placeHolder
      this.value = formData[label]
    }
  }
  const inputInfo = [
    new InputInfo('name', 'Name', 'text', 'e.g. Stephen King'),
    new InputInfo(
      'email',
      'Email Address',
      'email',
      'e.g. stephenking@lorem.com'
    ),
    new InputInfo(
      'phone-number',
      'Phone Number',
      'text',
      'e.g. +1 234 567 890'
    ),
  ]
  return (
    <main className="step-one">
      <h1>Personal info</h1>
      <p>Please provide your name, email, address and phone number.</p>
      {inputInfo.map((item, idx) => {
        return <InputField key={idx} {...item} handleInput={handleInput} />
      })}
    </main>
  )
}
