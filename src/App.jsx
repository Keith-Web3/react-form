import { useState } from 'react'
import HeroSection from './Components/HeroSection'
import StepOne from './Components/StepOne'
import StepTwo from './Components/StepTwo'
import StepThree from './Components/StepThree'
import StepFour from './Components/StepFour'
import StepFive from './Components/StepFive'
import './Sass/index.scss'

function App() {
  const [currPage, setCurrPage] = useState(() => 1)
  const [formData, setFormData] = useState(() => ({}))
  const [selectedPlan, setSelectedPlan] = useState(() => [
    0,
    'Arcade',
    ['$9/mo', '$90/yr'],
  ])
  const [billingChoice, setBillingChoice] = useState(() => 'monthly')

  function updateBillingChoice(e) {
    billingChoice === 'monthly'
      ? e.target.classList.add('yearly')
      : e.target.classList.remove('yearly')
    setBillingChoice(billingChoice === 'monthly' ? 'yearly' : 'monthly')
    setFormData(prevData => {
      const newData = { ...prevData }
      for (const key in newData) {
        if (Array.isArray(newData[key])) {
          const price = newData[key][1].match(/\d/)[0]
          newData[key] = [
            newData[key][0],
            billingChoice === 'yearly' ? `+$${price}/mo` : `+$${price * 10}/yr`,
          ]
        }
      }
      return newData
    })
  }
  function updateSelectedPlan(idx, plan, price) {
    return () => setSelectedPlan([idx, plan, price])
  }
  function handleInput(e) {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? [
                e.target.checked,
                e.target.nextElementSibling.nextElementSibling.textContent,
              ]
            : e.target.value,
      }
    })
  }
  function updateCurrPage(selectedPage, change) {
    return () =>
      setCurrPage(prevVal => {
        if (!selectedPage && ![1, 2, 3, 4, 5].includes(prevVal + change))
          return prevVal
        return +selectedPage || prevVal + change
      })
  }
  return (
    <>
      <HeroSection currPage={currPage} handleClick={updateCurrPage} />
      {currPage === 1 && (
        <StepOne handleInput={handleInput} formData={formData} />
      )}
      {currPage === 2 && (
        <StepTwo
          selectedPlan={selectedPlan}
          updateSelectedPlan={updateSelectedPlan}
          billingChoice={billingChoice}
          updateBillingChoice={updateBillingChoice}
        />
      )}
      {currPage === 3 && (
        <StepThree
          billingChoice={billingChoice}
          handleInput={handleInput}
          formData={formData}
        />
      )}
      {currPage === 4 && (
        <StepFour
          selectedPlan={selectedPlan}
          billingChoice={billingChoice}
          formData={formData}
          updateCurrPage={updateCurrPage}
        />
      )}
      {currPage === 5 && <StepFive />}
      {currPage !== 5 && (
        <div className="btn-container">
          {currPage !== 1 && (
            <button
              className="back-btn"
              onClick={updateCurrPage(undefined, -1)}
            >
              Go Back
            </button>
          )}
          <button
            type="button"
            onClick={updateCurrPage(undefined, 1)}
            className={`next-btn ${currPage === 4 ? 'confirm-btn' : null}`}
          >
            {currPage === 4 ? 'Confirm' : 'Next Step'}
          </button>
        </div>
      )}
    </>
  )
}

export default App
