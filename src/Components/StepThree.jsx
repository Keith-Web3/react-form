import React from 'react'
import AddOn from './resuables/AddOn'
import '../Sass/step_three.scss'

export default function StepThree({ billingChoice, handleInput, formData }) {
  class AddOnInfo {
    constructor(title, service, price, name) {
      this.title = title
      this.name = name || title
      this.service = service
      this.price = [`+$${price}/mo`, `+$${price * 10}/yr`]
      this.checked = formData[this.name] ? formData[this.name][0] : null
    }
  }
  const addOnData = [
    new AddOnInfo('Online-service', 'Access to multiplayer games', 1),
    new AddOnInfo('Larger storage', 'Extra 1TB of cloud save', 2),
    new AddOnInfo('Customizable profile', 'Custom theme on your profile', 2),
  ]
  return (
    <main className="step-three">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      {addOnData.map((data, idx) => (
        <AddOn
          {...data}
          key={idx}
          billingChoice={billingChoice}
          handleInput={handleInput}
          formData={formData}
        />
      ))}
    </main>
  )
}
