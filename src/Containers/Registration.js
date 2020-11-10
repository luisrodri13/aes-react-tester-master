import React, { useState } from "react";
import "./App.css";

function App() {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setUsernameReg] = useState('')

    return (
        <div className="App">
        <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value);
        }}
         /> 
        <label>Password</label>
        <input type="text" onChange={(e) => {setPasswordReg(e.target.value);
        }}
        />
        <button> Register </button>
        </div>
        </div>
    );
}