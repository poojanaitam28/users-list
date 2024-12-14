import React, { useEffect, useState } from "react";
// import users from '/';
import axios from "axios";
import { Link } from "react-router-dom";

function Home({}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="py-3 px-5">
      <h1 className="font-extrabold text-center mb-4 mt-3 ">Home Page</h1>
      <table class="table border shadow ">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td scope="row">{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  style={{ marginRight: "8px" }}
                  className="btn btn-primary"
                  to={`/user/${user.id}`}
                >
                  View
                </Link>
                <Link
                  style={{ marginRight: "8px" }}
                  className="btn btn-outline-primary"
                  to={`/user/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger gap-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
