import React, { useState } from 'react'
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

const initialState =  {
  password: '',
  email: '',
  showPassword: false,
}

function Login() {
  const [ values, setValues ] = useState<LoginState>(initialState)

  const handleChange =
	(prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className='login-container'>
      <Grid container>
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
        >
          <TextField
            label="Email"
            id="outlined-start-adornment"
            sx={ classes.emailPasswordSizes }
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
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
