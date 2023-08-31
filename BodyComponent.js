import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PatientEntryForm from './PatientEntryForm';
import PatientInformation from './PatientInformation';
import PatientTestForm from './PatientTestForm/PatientTestForm';
const BodyComponent = () => {
  return (
    <div className='bodyDiv'>
      <Routes>
        <Route path='/' element={<img src='./images/doc.png' alt='doctor' />} />
        <Route path='/patient-entry-form' element={<PatientEntryForm />} />
        <Route path='/patient-tests-form' element={<PatientTestForm />} />
        <Route path='/patient-information' element={<PatientInformation />} />
      </Routes>
    </div>
  )
}

export default BodyComponent;

