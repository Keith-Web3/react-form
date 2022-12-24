import React from 'react'
import { useState } from 'react'

export default function BillingPlan({
  img,
  header,
  price,
  promo,
  billingChoice,
  updateSelectedPlan,
  selected,
}) {
  return (
    <div
      className={`billing-plan ${selected ? 'active' : ''}`}
      onClick={updateSelectedPlan}
    >
      <img src={img}></img>
      <div>
        <h2>{header}</h2>
        <p>{billingChoice === 'yearly' ? price[1] : price[0]}</p>
        {billingChoice === 'yearly' && <p className="promo">{promo}</p>}
      </div>
    </div>
  )
}
