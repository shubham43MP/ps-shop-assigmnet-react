import React from 'react'
import { SABKA_BAZAR_LOGO_PATH } from '../../../apis/constants'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'

function Header() {
  return (
    <AppBar sx={ { background: 'inherit', height: '5%' } } position='sticky'>
      <Grid container sx={ { padding: '2%' } }>
        <Grid item xs={0} sx={{ display: {  xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
          <img
            src={ SABKA_BAZAR_LOGO_PATH }
            alt='sabka-bazaar-logo.png'
            className='sabka-bazar-logo'
            id='sabka-bazar-logo-id'
          />
        </Grid>
        <Grid item xs={12} >

        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
