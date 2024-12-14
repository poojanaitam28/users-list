import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edituser() {
  const { id } = useParams();
  console.log(id);

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
    let res = await axios.put(`http://localhost:3003/users/${id}`, user);
    console.log(res);
    navigate("/");
  };

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center">Update Info.</h1>
      <div class="mb-3">
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
          <button className="btn btn-outline-primary mt-3">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Edituser;
