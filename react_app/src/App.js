import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    alert("Form Successfully Submitted!");
  };

  const validateForm = () => {
    let valid = true;
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setValidEmail(false);
      valid = false;
    } else {
      setValidEmail(true);
    }
    if (!firstName.match(/^[a-zA-Z\s]+$/)) {
      setValidFirstName(false);
      valid = false;
    } else {
      setValidFirstName(true);
    }
    if (!lastName.match(/^[a-zA-Z\s]+$/)) {
      setValidLastName(false);
      valid = false;
    } else {
      setValidLastName(true);
    }
    if (!phoneNumber.match(/^(09\d{2}-\d{3}-\d{4})$/)) {
      setValidPhone(false);
      valid = false;
    } else {
      setValidPhone(true);
    }
    return valid;
  };

  const inputClass = validEmail ? "" : "border-red-500";
  const inputFNameClass = validFirstName ? "" : "border-red-500";
  const inputLNameClass = validLastName ? "" : "border-red-500";
  const inputPhoneClass = validPhone ? "" : "border-red-500";
  const validForm = validEmail && validFirstName && validLastName && validPhone;


  return (
  <div className="flex justify-center items-center h-screen">
    <div className="rounded-lg bg-gray-100 p-8">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + inputClass}
                id="inline-full-name"
                type="text"
                placeholder="JuanDeLaCruz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!validEmail && (
                <span className="text-red-500 text-xs italic">
                  Please enter a valid email address.
                </span>
              )}
            </div>
        </div>

        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-first-name"
          >
            First Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={`${
              validFirstName ? "border-gray-300" : "border-red-500"
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="inline-first-name"
            type="text"
            placeholder="Juan"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setValidFirstName(/^[A-Za-z\s]+$/.test(e.target.value));
            }}
          />
          {!validFirstName && (
            <span className="text-red-500 text-xs italic">
              Please enter a valid first name.
            </span>
          )}
        </div>
      </div>
      
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="inline-last-name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Last Name
          </label>
        </div>
        <div className="md:w-2/3">
            <input 
              className={"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + inputLNameClass}
              id="inline-last-name" 
              type="text" 
              placeholder="Dela Cruz" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {!validLastName && <p className="text-red-500 text-xs italic">Please enter a valid last name.</p>}
          </div>
      </div>
      
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="inline-phone-number" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Phone Number
          </label>
        </div>
        <div className="md:w-2/3">
          <input 
            className={"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + inputPhoneClass} 
            id="inline-phone-number" 
            type="text" 
            placeholder="09XX-XXX-XXXX" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {!validPhone && <p className="text-red-500 text-xs italic">Please enter a valid phone number.</p>}
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button 
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            type="submit" 
            disabled={!validForm} 
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>

      </form>
    </div>
  </div>
    
  );
}

export default App;
