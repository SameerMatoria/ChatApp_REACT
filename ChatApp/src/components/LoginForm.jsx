import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      'Project-ID':'702d4a3b-309e-4853-ba64-189943d4eb5c',
      'User-Name':username,
      'User-Secret' :password
    }
    try {
     await axios.get('https://api.chatengine.io/chats', {headers: authObject});
     localStorage.setItem('username',username)
     localStorage.setItem('password',password)
     window.location.reload()
    } catch (error) {
      setError("Incorrect username or password. Please try again.");
    }

  }



  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="UserName"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="PassWord"
            required
          />
          <div align='center'>
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
