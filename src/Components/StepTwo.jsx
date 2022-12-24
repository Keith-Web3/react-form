import React, { useState } from 'react'
import BillingPlan from './resuables/BillingPlan'
import { nanoid } from 'nanoid'
import '../Sass/step_two.scss'

export default function StepTwo({
  selectedPlan,
  updateSelectedPlan,
  billingChoice,
  updateBillingChoice,
}) {
  class BillingInfo {
    constructor(img, price) {
      this.img = `../src/assets/icon-${img}.svg`
      this.header = img[0].toUpperCase() + img.slice(1)
      this.price = [`$${price}/mo`, `$${price * 10}/yr`]
      this.promo = '2 months free'
    }
  }
  const billingInfo = [
    new BillingInfo('arcade', 9),
    new BillingInfo('advanced', 12),
    new BillingInfo('Pro', 15),
  ]

  return (
    <main className="step-two">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      {billingInfo.map((item, idx) => (
        <BillingPlan
          {...item}
          key={nanoid()}
          billingChoice={billingChoice}
          updateSelectedPlan={updateSelectedPlan(idx, item.header, item.price)}
          selected={idx === selectedPlan[0]}
        />
      ))}
      <div className="switch">
        <p>Monthly</p>
        <div
          className={billingChoice === 'monthly' ? null : 'yearly'}
          onClick={updateBillingChoice}
        ></div>
        <p>Yearly</p>
      </div>
    </main>
  )
}
