import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { classes } from './style'
import { LoginState } from './login.type'
import './styles.scss'
import './queries.scss'
import { login } from 'config/fire'
import Notification from 'components/molecules/notification'
import useNotification from 'hooks/useNotification'

const initialState =  {
  password: '',
  email: '',
  showPassword: false,
}

function Login() {
  const [ values, setValues ] = useState<LoginState>(initialState)
  const navigate = useNavigate()
  const {
    notification,
    handleNotificationClose,
    handleNotificationOpen
  } = useNotification()

  const handleChange =(prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValues({ ...values, [ prop ]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleLogin = async () => {
    try {
      const user  = await login(values.email, values.password)
      sessionStorage.setItem('access-token', user.user.refreshToken)
      navigate('/home')
    } catch(e) {
      handleNotificationOpen({ al: `Error occured while logging in: ${ e }`, severity: 'error' })
    }
  }

  return (
    <>
      <div>
        <Grid container className="login-text-container login-container">
          <Grid
            item
            xs={ 12 }
            sm={ 12 }
            md = { 6 }
            lg = { 6 }
          >
            <Typography sx={ classes.loginTypo }>
                Login
            </Typography>
            <Typography sx={ classes.loginMessage }>
                Get access to your Orders, Wishlist and Recommendation
            </Typography>
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 12 }
            md = { 6 }
            lg = { 6 }
            className='em-pass-container'
          >
            <TextField
              label="Email"
              id="outlined-start-adornment"
              sx={ classes.emailPasswordSizes }
              value={ values.email }
              onChange={ handleChange('email') }
            />
            <FormControl sx={ classes.emailPasswordSizes } variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={ values.showPassword ? 'text' : 'password' }
                value={ values.password }
                onChange={ handleChange('password') }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={ handleClickShowPassword }
                      onMouseDown={ handleMouseDownPassword }
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <button className="btn-login" onClick={ handleLogin } > Login </button>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Notification
        severity={ notification.severity }
        alertLabel={ notification.alertLabel }
        handleClose={ handleNotificationClose }
        open={ notification.open }
      />
    </>
  )
}

export default Login
