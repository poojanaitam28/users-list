import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function View() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
  };
  return (
    <div>
      <Link
        to="/"
        class="btn btn-outline-primary "
        style={{ marginLeft: "20px", marginBottom: "10px" }}
      >
        Back{" "}
      </Link>
      <div class="card" style={{ marginRight: "10px", marginLeft: "20px" }}>
        <div class="card-header">ID : {id}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name : {user.name}</li>
          <li class="list-group-item">Username : {user.username}</li>
          <li class="list-group-item">Email : {user.email}</li>
          <li class="list-group-item">Phone : {user.phone}</li>
          <li class="list-group-item">Website : {user.website}</li>
        </ul>
      </div>
    </div>
  );
}

export default View;
