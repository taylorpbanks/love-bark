import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    props.history.push('/home');
  };

  return (
    <div className="login">
    <div className="login-container text-center">
      <FontAwesomeIcon icon="dog" size="6x" />

      <h1 className="text-center">Sign In</h1>

      <Form onSubmit={handleSubmit} className="margin-top-lg">
        <label
          htmlFor="username"
          className={username !== '' ? 'has-value input-container' : 'input-container'}
        >
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="&nbsp;"
            value={username}
            onChange={handleUsernameInput}
          />
          <span className="label">Username</span>
          <span className="border"></span>
        </label>

        <div className="margin-top-md" />
        <label
          htmlFor="password"
          className={password !== '' ? 'has-value input-container' : 'input-container'}
        >
          <input
            type="password"  
            id="password"
            autoComplete="off"
            placeholder="&nbsp;"
            value={password}
            onChange={handlePasswordInput}
          />
          <span className="label">Password</span>
          <span className="border"></span>
        </label>

        <div className="btn-container">
          <Button className="margin-top-md login-btn" color="primary" size="lg">
            Login
          </Button>
        </div>
        <div className="margin-top-sm">
          Not a member? <a href="/home">Join Now</a>.
        </div>
      </Form>
    </div>
  </div>
  );
};

export default Login;