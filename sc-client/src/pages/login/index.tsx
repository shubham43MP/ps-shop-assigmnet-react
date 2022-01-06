import React, { lazy, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { login } from 'config/fire'
import useNotification from 'hooks/useNotification'
import { classes } from './style'
import { LoginState } from './login.type'
import { addUser } from 'redux/actions/action'
import './styles.scss'
import './queries.scss'

const TextField = lazy(() => import('@mui/material/TextField'))
const IconButton = lazy(() => import('@mui/material/IconButton'))
const Typography = lazy(() => import('@mui/material/Typography'))
const Grid = lazy(() => import('@mui/material/Grid'))
const OutlinedInput = lazy(() => import('@mui/material/OutlinedInput'))
const InputLabel = lazy(() => import('@mui/material/InputLabel'))
const InputAdornment = lazy(() => import('@mui/material/InputAdornment'))
const FormControl = lazy(() => import('@mui/material/FormControl'))
const Visibility = lazy(() => import('@mui/icons-material/Visibility'))
const VisibilityOff = lazy(() => import('@mui/icons-material/VisibilityOff'))
const NonLoginWrapper = lazy(() => import('components/wrappers/non-login-wrapper'))
const NavbarWrapper = lazy(() => import('components/wrappers/navbar-wrapper'))
const SuspenseWrapper = lazy(() => import('components/wrappers/suspense-wrapper'))
const Notification = lazy(() => import('components/molecules/notification'))

const initialState =  {
  password: '',
  email: '',
  showPassword: false,
}

function Login() {
  const [ values, setValues ] = useState<LoginState>(initialState)
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
      dispatch(addUser({ user }))
      navigate('/home')
    } catch(e) {
      handleNotificationOpen({ al: `Error occured while logging in: ${ e }`, severity: 'error' })
    }
  }

  return (
    <>
      <SuspenseWrapper>
        <NonLoginWrapper>
          <NavbarWrapper>
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
          </NavbarWrapper>
        </NonLoginWrapper>
      </SuspenseWrapper>
    </>
  )
}

export default Login
