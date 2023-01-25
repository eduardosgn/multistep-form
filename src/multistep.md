import React, { useState } from 'react';

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  function handleNext() {
    setCurrentStep(currentStep + 1);
  }

  function handlePrev() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}

      <button onClick={handlePrev} disabled={currentStep === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === 4}>
        Next
      </button>
    </div>
  );
}
