import React from 'react'
import { SABKA_BAZAR_LOGO_PATH } from '../../../apis/constants'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { appBarStyle, buttonStyle, iconScaling } from './style'

type HeaderPropsType = {
  cartItems?: number;
  children?: React.ReactNode;
}

function Header({ cartItems = 1, children } : HeaderPropsType) {
  return (
    <>
      <AppBar sx={ appBarStyle } position='sticky'>
        <Grid container sx={ { padding: '2%' } }>
          <Grid
            item
            xs={ 9 } sm = { 0 } md = { 9 } lg = { 9 } xl = { 9 }
            sx={ { display: 'flex' } }
          >
            <img
              src={ SABKA_BAZAR_LOGO_PATH }
              alt='sabka-bazaar-logo.png'
              className='sabka-bazar-logo'
              id='sabka-bazar-logo-id'
            />
            <div style={ { position: 'relative' } }>
              <Box sx={ {
                marginLeft: 2,
                position: 'absolute',
                display: {
                  xs: 'none', sm: 'none', md: 'flex'
                },
                top: '50%' } }
              >
                <Button sx={ buttonStyle } variant="contained">Home</Button>
                <Button sx={ { marginLeft: 1, ...buttonStyle } } variant="contained">Products</Button>
              </Box>
            </div>
          </Grid>
          <Grid
            item
            xs={ 3 } sm={ 12 } md={ 3 } lg={ 3 } xl={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <div style={ { position: 'absolute', bottom: '50%' } }>
              <Badge badgeContent={ cartItems } color="error" sx ={ { transform: iconScaling } }>
                <ShoppingCartIcon sx={ { color: '#FF058D', transform: iconScaling } } color="action"/>
              </Badge>
            </div>          
          </Grid>
        </Grid>
      </AppBar>
        {children}
    </>
  )
}

export default Header
