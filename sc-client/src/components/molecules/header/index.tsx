import React from 'react'
import { SABKA_BAZAR_LOGO_PATH } from '../../../apis/constants'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

type HeaderPropsType = {
  cartItems?: number
}

function Header({ cartItems = 1 } : HeaderPropsType) {
  return (
    <AppBar sx={ { background: 'inherit', height: '5%' } } position='sticky'>
      <Grid container sx={ { padding: '2%' } }>
        <Grid item xs={ 9 } sm = { 0 } md = { 9 } lg = { 9 } xl = { 9 }>
          <img
            src={ SABKA_BAZAR_LOGO_PATH }
            alt='sabka-bazaar-logo.png'
            className='sabka-bazar-logo'
            id='sabka-bazar-logo-id'
          />
        </Grid>
        <Grid item xs={ 3 } sm={ 12 } md={ 3 } lg={ 3 } xl={ 3 }>
          <div style={ { position: 'absolute', bottom: '50%' } }>
            <Badge badgeContent={ cartItems } color="error">
              <ShoppingCartIcon sx={ { color: '#FF058D' } } color="action"/>
            </Badge>
          </div>          
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
