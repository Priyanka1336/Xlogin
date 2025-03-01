import React, { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [w, setW] = useState(false);
  const [yes, setYes] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setW(true);
    if (user === "user" && password === "password") {
      setYes(true);
    } else {
      setYes(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {yes ? (
        <div>
          <h3>Welcome, User!</h3>
        </div>
      ) : (
        <div>
          {w && (
            <div style={{ color: "red" }}>Invalid username or password</div>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username">Username</label>
            <input
              name="Username"
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              required
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              name="Password"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
