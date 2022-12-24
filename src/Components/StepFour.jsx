import React from 'react'
import '../Sass/step_four.scss'

export default function StepFour({
  selectedPlan,
  billingChoice,
  formData,
  updateCurrPage,
}) {
  let selectedServices = []
  for (const key in formData) {
    if (formData[key][0] === true)
      selectedServices = [...selectedServices, [key, formData[key][1]]]
  }
  const planPrice = selectedPlan[2][billingChoice === 'monthly' ? 0 : 1]
  const totalPrice =
    selectedServices.reduce(
      (acc, el) => acc + Number.parseInt(el[1].slice(2)),
      0
    ) + Number.parseInt(planPrice.slice(1))

  return (
    <main className="step-four">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="service-container">
        <div className="header">
          <p className="plan">
            {selectedPlan[1]}
            {`(${billingChoice[0].toUpperCase() + billingChoice.slice(1)})`}
          </p>
          <p className="change" onClick={updateCurrPage(2)}>
            Change
          </p>
          <p className="price">{planPrice}</p>
        </div>
        {selectedServices.map(item => (
          <div className="service">
            <p className="service__name">{item[0]}</p>
            <p className="service__price">{item[1]}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total (per {billingChoice === 'monthly' ? 'month' : 'year'})</p>
        <p className="total__price">
          +${totalPrice}/{billingChoice === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </main>
  )
}
