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
            <label htmlFor="user">UserName</label>
            <input
              name="user"
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
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
