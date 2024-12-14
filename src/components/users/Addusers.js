import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addusers() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });

  const { name, email, username, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3003/users", user);
    console.log(res);
    navigate("/");
  };
  return (
    <div className="p-5">
      <h1 className="text-center mb-3">Add a user</h1>
      <div class="">
        <form onSubmit={(e) => submitHandle(e)}>
          <label for="exampleFormControlInput1" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Website
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
          <button className="btn btn-outline-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Addusers;
