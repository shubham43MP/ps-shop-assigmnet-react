import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { classes } from './style'
import './styles.scss'

function Login() {
  return (
    <div className='login-container'>
      <Grid container>
        <Grid item xs={ 6 }>
          <Typography sx={ classes.loginTypo }>
                Login
          </Typography>
          <Typography sx={ classes.loginMessage }>
                Get access to your Orders, Wishlist and Recommendation
          </Typography>
        </Grid>
        <Grid item xs={ 6 }>
                Login Buttons
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
