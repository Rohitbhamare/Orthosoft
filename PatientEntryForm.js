import React, { useEffect } from 'react'
import shortid from 'shortid';
import { useState } from 'react'
import "./PatientEntryForm.css";
import { patientById } from './PatientData/getPatientById';
import { PatientDataObject } from './PatientData/PatientData';

const PatientEntryForm = () => {
  const [showPatientIdInput, setShowPatientIdInput] = useState(false);
  const [saveData, setSaveData] = useState();
  const [oldPatient, setOldPatient] = useState();
  useEffect(() => {
    setSaveData(PatientDataObject);
  }, [])

  const onChangeHandler = (e) => {
    let obj = saveData;
    const isPatientType = e.target.name === "patientType";
    if (!isPatientType)
      obj[e.target.name] = e.target.value;
    else
    setOldPatient(e.target.value);
    setSaveData(obj);
    setShowPatientIdInput(e.target.value === "yes" && isPatientType ? true : false);
  };

  const CreateNewId = () => {
    let newID = shortid.generate();
    return newID;
  }

  const submitPatientData = () => {
    let obj = saveData;
    obj.id = !obj.id ? CreateNewId() : obj.id;
    setSaveData(obj);
    let entries = localStorage.getItem("entries") ? JSON.parse(localStorage.getItem("entries")) : [];
    if (oldPatient === "no") {
      let patients = localStorage.getItem("patients") ? JSON.parse(localStorage.getItem("patients")) : [];
      patients.push(saveData);
      localStorage.setItem("patients", JSON.stringify(patients));
    }
    entries.push(saveData);
    localStorage.setItem("entries", JSON.stringify(entries));
  }
  const getPatientById = (id) => {
    Object.keys(patientById).forEach(function (key) {
      if (document.getElementById(key))
        document.getElementById(key).value = patientById[key];
    });
    setSaveData(patientById);
  }
  return (
    <div>
      <div className="container">
        <div className="flex-parent-container">
          <div className="flex-personal-detail">
            <h1>Patient Details</h1>
          </div>
          <form>

            <div className="flex-fields">
              <div className="flex-containes">
                <label for="firstname">First Name:</label>
                <input type="text" name="firstName" id="firstName" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              <div className="flex-containes">
                <label for="middlename">Middle Name:</label>
                <input type="text" name="middleName" id="middleName" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              <div className="flex-containes">
                <label for="lastname">Last Name:</label>
                <input type="text" name="lastName" id="lastName" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              <div className="flex-containes">
                <label for="mobileno">Mobile No:</label>
                <input type="number" name="mobileNumber" id="mobileNumber" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              {showPatientIdInput === true ? (
                <div className="flex-containes">
                  <label for="oldpatient">Patient Id:</label>
                  <input type="number" name="id" id="id" onBlur={() => getPatientById("1")} />
                </div>
              ) : (<div className="flex-containes">
                <label for="adharno">Adhar No:</label>
                <input type="number" name="aadharNumber" id="adharNumber" onChange={(e) => onChangeHandler(e)}></input>
              </div>)}
              <div className="flex-containes">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              <div className="flex-containes">
                <label for="age">Age:</label>
                <input type="number" name="age" id="age" onChange={(e) => onChangeHandler(e)}></input>
              </div>
              <div className="flex-containes">
                <label for="gender">Gender:</label>
                <select className="selectgender" name="gender" id="gender" onChange={(e) => onChangeHandler(e)}>
                  <option selected>select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex-containes">
                <label for="city">city:</label>
                <input type="text" name="city" id="city" onChange={(e) => onChangeHandler(e)} />
              </div>
              <div className="patient-details-radio">
                <div for="oldpatient" className="old-new-patient">
                  <div className="label-radio-old-new">
                    <input
                      type="radio"
                      id="radio-1"
                      name="patientType"
                      value="yes"
                      onClick={(e) => onChangeHandler(e)}
                    />
                    <label for="radio-1" className="yesno">
                      yes
                    </label>
                  </div>
                  <div className="label-radio-old-new">
                    <input
                      type="radio"
                      id="radio-2"
                      name="patientType"
                      value="no"
                      onClick={(e) => onChangeHandler(e)}
                    />
                    <label for="radio-2" className="yesno">
                      No
                    </label>
                  </div>
                </div>
                <label>Old Patient</label>
              </div>
              <div className="flex-containes">
                <label for="gender">MLC(Medico Legal Case)</label>
                <select className="selectgender" name="isMLC" id="isMLC" onChange={(e) => onChangeHandler(e)}>
                  <option selected>select</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="flex-containes">
                <label for="refered">Refered By:</label>
                <input type="text" name="referredBy" id="referredBy" onChange={(e) => onChangeHandler(e)}></input>
              </div>
            </div>
            <button type="button" className="form-action">
              Back
            </button>
            <button type="submit" className="form-action" onClick={() => submitPatientData()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default PatientEntryForm;