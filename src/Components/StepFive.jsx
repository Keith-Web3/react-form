import React from 'react'
import '../Sass/step-five.scss'
import image from '../assets/icon-thank-you.svg'

export default function StepFive() {
  return (
    <main className="step-five">
      <img src={image} alt="thank you" />
      <p className="header">Thank You!</p>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you need support, feel free to email us at
        support@loremgaming.com
      </p>
    </main>
  )
}
