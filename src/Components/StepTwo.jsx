import React, { useState } from 'react'
import BillingPlan from './resuables/BillingPlan'
import { nanoid } from 'nanoid'
import '../Sass/step_two.scss'
import arcade from '../assets/icon-arcade.svg'
import advanced from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'

export default function StepTwo({
  selectedPlan,
  updateSelectedPlan,
  billingChoice,
  updateBillingChoice,
}) {
  class BillingInfo {
    constructor(img, price, name) {
      this.img = img
      this.header = name[0].toUpperCase() + name.slice(1)
      this.price = [`$${price}/mo`, `$${price * 10}/yr`]
      this.promo = '2 months free'
    }
  }
  const billingInfo = [
    new BillingInfo(arcade, 9, 'arcade'),
    new BillingInfo(advanced, 12, 'advanced'),
    new BillingInfo(pro, 15, 'pro'),
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
