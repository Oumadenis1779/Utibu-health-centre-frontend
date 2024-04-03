import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sighnup.css"; // Make sure to import your CSS file

function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validEmail = (Email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(Email);
  };

  const checkPassword = (Password) => {
    return Password.length >= 6;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!validEmail(Email)) {
      setError("Invalid Email address");
      return;
    }

    if (!checkPassword(Password)) {
      setError("Password must be at least 6 characters long");
      return;
    }

    fetch("/add_customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username , FirstName  , LastName, Phone, Address, Email, Password }),
    })
      .then((r) => {
        if (r.ok) {
          navigate("/signin");
        } else {
          throw new Error("Failed to register");
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setError("Failed to register. Please try again.");
      });
  }

  return (
    <div className="signup-page">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 border rounded">
              <h2 className="mb-4 text-center">Sign Up</h2>
              <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">
                  FirstName
                </label>
                <input
                  type="FirstName"
                  className="form-control"
                  id="FirstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="LastName" className="form-label">
                  LastName
                </label>
                <input
                  type="LastName"
                  className="form-control"
                  id="LastName"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Phone" className="form-label">
                  Phone
                </label>
                <input
                  type="Phone"
                  className="form-control"
                  id="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">

                <label htmlFor="Address" className="form-label">
                  Address
                </label>
                <input
                  type="Address"
                  className="form-control"
                  id="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  type="Password"
                  className="form-control"
                  id="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Register
                </button>
              </div>
              {error && <p className="text-danger mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
