import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { message } from 'antd';
import { useHistory } from "react-router-dom";


const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signInButton = document.getElementById('signInButton');
    const [messageApi, contextHolder] = message.useMessage();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSignIn = (event) => {
        event.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            messageApi.open({
                type: 'error',
                content: 'Please enter both username and password.',
              });
            return;
        }
        signInButton.innerHTML = 'Signing In...';

        setTimeout(() => {
            history.push("/dashboard");
        }, 1000);
    };
  
    

    return (

        <Form onSubmit={handleSignIn}>
            {contextHolder}
            <div>
                <label htmlFor="Inputusername" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control mb-3 rounded-pill text-black-50"
                    id="Inputusername"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                    <label htmlFor="Inputpassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control mb-4 rounded-pill text-black-50"
                        id="Inputpassword"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
            </div>
            <div>
                    <button
                        type="submit"
                        className="btn btn-primary px-4 mb-4 w-100"
                        id="signInButton"
                    >
                        Sign In
                    </button>
            </div>
        </Form>
    );
};

export default SignInForm;
