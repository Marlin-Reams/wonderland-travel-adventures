import React from "react";
import "./Plan.css";
import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import emailjs from'emailjs-com'




const Planning = () => {
  const [page, setPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [firstNameValidated, setFormValidated] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [number, setNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [desiredDestination, setDesiredDestination] = useState([]);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [departTime, setDepartTime] = useState("");
  const [comments, setComments] = useState("");
  const [missingFields, setMissingFields] = useState([])


  const form = useRef();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);

    if(!e.target.value) {
      setFirstNameError("First name is required");
      setFormValidated(false)
    } else {
      setFirstNameError("");
      setFormValidated(true)
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);

    if(!e.target.value) {
      setLastNameError("Last name is required");
    } else {
      setLastNameError("");
    }
  };

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const handleNext = () => {
    const missingFields = [];

    if(!firstNameValidated) {
      missingFields.push("First Name");
    }

    if (missingFields.length > 0) {
      setMissingFields(missingFields);
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
    } else {
      setMissingFields([]);
      setPage(page + 1);
    }
  };
//     setPage(page + 1);
//   } else {
//     setFormValidated(false);
//     alert("Please fill in all required fields.");
//   }
// };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_QUESTION_TEMPLATE_ID;
  const userId = process.env.EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setPage(1);

    const formData = {
      f_name: firstName
    }

      emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_PLAN_A_TRIP_TEMPLATE_ID,
      {
        to_name: process.env.REACT_APP_EMAIL_RECEIVER_NAME,
        f_name: `${firstName} ${lastName}`,
    message: `
      Email: ${email}
      Address: ${address}
      Apt#: ${address2}
      City: ${city}
      State:${state}
      Zip: ${zip}
      Number of travelers: ${number}
      Destination: ${desiredDestination}
      Budget: ${budget}
      Arrival Date: ${arrivalDate}
      Arrival Time: ${arrivalTime}
      Departure Date: ${departDate}
      Departure Time: ${departTime}
      Concerns / Comments: ${comments}
    `},
        process.env.REACT_APP_EMAIL_USER_ID,
      )

      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
          setPage(1);
          e.target.reset()
        },

        () => {
          alert("Message failed to send!, please try again");
        }
      );
  };

  return (
    <div className="plan-page-wrapper">
      <div className="plan">
        <div className="plan-form">
          <form ref={form} onSubmit={sendEmail}>
            {page === 1 && (
              <>
                <h1>About You</h1>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className={`form-control ${missingFields.includes("First Name") ? "missing" : ""}`}
                      placeholder="First name"
                      name="f_name"
                      value={firstName}
                      // onChange={(e) => setFirstName(e.target.value)}
                      onChange={handleFirstNameChange}
                    />
                    {firstNameError && (
                      <div className="Invalid-feedback">{firstNameError}</div>
                    )}
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      value={lastName}
                      // onChange={(e) => setLastName(e.target.value)}
                      onChange={handleLastNameChange}
                    />
                    {lastNameError && (
                      <div className="Invalid-feedback">{lastNameError}</div>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4"></label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      placeholder="Zip Code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={!setFormValidated}
                >
                  Add Trip Info
                </button>
              </>
            )}
            {page === 2 && (
              <>
                <h1>Trip Info</h1>
                <div className="form-row col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="destination"
                    placeholder="Desired Destination"
                    value = {desiredDestination}
                    onChange={(e) => setDesiredDestination(e.target.value)}
                  />
                </div>
                <label htmlFor="travelers"></label>
                <div className="form-row col-md-6">

                    <input
                      type="number"
                      className="form-control"
                      id="party"
                      placeholder="How Many In The Party"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />

                </div>




                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      placeholder="Budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}

                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="ArrivalDate">Arrival Date</label>

                  <input
                    type="date"
                    className="form-control"
                    id="inputDate"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate (e.target.value)}
                  />
                  <label htmlFor="ArrivalTime">Arrival Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="inputTime"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime (e.target.value)}

                  />

                </div>
                <div className="form-group">
                  <label htmlFor="departDate">Departure Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="departDate"
                    value={departDate}
                    onChange={(e) => setDepartDate (e.target.value)}
                  />
                  <label htmlFor="departDate">Departure Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="departTime"
                    value={departTime}
                    onChange={(e) => setDepartTime (e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group ">
                    <label htmlFor="extras"></label>
                    <textarea type="text" className="form-control" id="extras" rows="3" placeholder="Any Comments Or Concerns" onChange={(e) => setComments (e.target.value)}></textarea>

                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePrev}
                >
                  Back To Personal Info
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Planning;
