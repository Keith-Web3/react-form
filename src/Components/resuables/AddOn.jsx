import React from 'react'

export default function AddOn({
  name,
  title,
  service,
  price,
  checked,
  billingChoice,
  handleInput,
}) {
  return (
    <div className="add-on">
      <input
        type="checkbox"
        name={name}
        onChange={handleInput}
        checked={checked ?? false}
      />
      <div>
        <h2 className="title">{title}</h2>
        <p className="service">{service}</p>
      </div>
      <p className="price">
        {billingChoice === 'yearly' ? price[1] : price[0]}
      </p>
    </div>
  )
}
