import React, { lazy } from 'react'
import { useNavigate } from 'react-router'
import { signup } from 'config/fire'
import useNotification from 'hooks/useNotification'
import './style.scss'
import { classes } from './style'

const TextField = lazy(() =>import ('@mui/material/TextField'))
const Notification = lazy(() => import('components/molecules/notification'))
const NonLoginWrapper = lazy(() => import('components/wrappers/non-login-wrapper'))
const NavbarWrapper = lazy(() => import('components/wrappers/navbar-wrapper'))
const SuspenseWrapper = lazy(() => import('components/wrappers/suspense-wrapper'))

const initialState = {
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  confirmPassword: '',
  showPassword: false,
}

type TRegister = {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

function Register() {
  const [ values, setValues ] = React.useState<TRegister>(initialState)
  const navigate = useNavigate()
  const {
    notification,
    handleNotificationClose,
    handleNotificationOpen
  } = useNotification()

  const handleChange = 	(prop: keyof TRegister) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [ prop ]: event.target.value })
  } 

  const handleSignUp = async () => {
    try {
      await signup(values.email, values.password)
      handleNotificationOpen({ al: 'User Registration Successfull, Please Login ', severity: 'success' })
      setTimeout(() => {
        navigate('/login')
      }, 3000) 
    } catch(e) {
      if(e instanceof Error) {
        handleNotificationOpen({ al: `User Registration Failed: ${ e.message }`, severity: 'error' })
      }
    }
  }
  return (
    <>
      <SuspenseWrapper>
        <NonLoginWrapper>
          <NavbarWrapper>
            <div className="container">
              <div className="signup-text-container">
                <p className="signup-text">Signup</p>
                <p className="signup-message">We do not share your personal details with anyone</p>
              </div>
              <div className="form-control-container">
                <TextField
                  label="First Name"
                  id="outlined-start-adornment"
                  onChange={ handleChange('firstName') }
                  value={ values.firstName }
                  sx={ classes.emailPasswordSizes }
                />
                <TextField
                  label="Last Name"
                  id="outlined-start-adornment"
                  onChange={ handleChange('lastName') }
                  value={ values.lastName }
                  sx={ classes.emailPasswordSizes }
                />
                <TextField
                  label="Email"
                  id="outlined-start-adornment"
                  onChange={ handleChange('email') }
                  value={ values.email }
                  sx={ classes.emailPasswordSizes }
                />
                <TextField
                  label="Password"
                  id="outlined-start-adornment"
                  onChange={ handleChange('password') }
                  value={ values.password }
                  sx={ classes.emailPasswordSizes }
                />
                <TextField
                  label="Confirm Password"
                  id="outlined-start-adornment"
                  sx={ classes.emailPasswordSizes }
                  value={ values.confirmPassword }
                  onChange={ handleChange('confirmPassword') }
                />
                <button className="btn-login" onClick={ handleSignUp }> Signup </button>
              </div>
            </div>
            <Notification
              severity={ notification.severity }
              alertLabel={ notification.alertLabel }
              handleClose={ handleNotificationClose }
              open={ notification.open }
            />
          </NavbarWrapper>
        </NonLoginWrapper>
      </SuspenseWrapper>
    </>
  )
}

export default Register
