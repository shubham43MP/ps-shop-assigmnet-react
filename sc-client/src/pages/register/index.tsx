import React from 'react'
import TextField from '@mui/material/TextField'
import { classes } from './style'
import './style.scss'

function Register() {
  return (
    <div className="container">
      <div className="signup-text-container">
        <p className="signup-text">Signup</p>
        <p className="signup-message">We do not share your personal details with anyone</p>
      </div>
      <div className="form-control-container">
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={ classes.emailPasswordSizes }
        />
        <TextField
          label="Last Name"
          id="outlined-start-adornment"
          sx={ classes.emailPasswordSizes }
        />
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={ classes.emailPasswordSizes }
        />
        <TextField
          label="Password"
          id="outlined-start-adornment"
          sx={ classes.emailPasswordSizes }
        />
        <TextField
          label="Confirm Password"
          id="outlined-start-adornment"
          sx={ classes.emailPasswordSizes }
        />
        <button className="btn-login"> Signup </button>
      </div>
    </div>
  )
}

export default Register
