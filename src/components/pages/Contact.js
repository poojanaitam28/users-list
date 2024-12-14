import React from "react";

function Contact() {
  return (
    <div className=" mt-3 p-5">
      <h1 className="text-center">Contact Me.</h1>
      <div className="form-floating bg-red-300 w-1/2 mt-5 mb-4">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Name</label>
      </div>
      <button class="btn btn-outline-primary mt-4">Submit</button>
    </div>
  );
}

export default Contact;
