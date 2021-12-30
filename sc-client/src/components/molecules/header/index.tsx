import React from 'react';
import { SABKA_BAZAR_LOGO_PATH } from '../../../apis/constants';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { appBarStyle, iconScaling } from './style';
import './style.scss'

type HeaderPropsType = {
  cartItems?: number;
  children?: React.ReactNode;
};

function Header({ cartItems = 1, children }: HeaderPropsType) {
  return (
    <>
      <AppBar sx={ appBarStyle } position="sticky">
        <Grid container sx={ { padding: '2%' } }>
          <Grid
            item
            xs={ 9 }
            sx={ { display: 'flex' } }
          >
            <img
              src={ SABKA_BAZAR_LOGO_PATH }
              alt="Sabka Bazar Logo"
              className="sabka-bazar-logo"
              id="sabka-bazar-logo-id"
            />
            <div style={ { position: 'relative' } }>
              <Box
                sx={ {
                  marginLeft: '2px',
                  position: 'absolute',
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'flex'
                  },
                  top: '50%',
                  gap: '0.8rem'
                } }
              >
                <button className='button-style'>Home</button>
                <button className='button-style'>Products</button>
              </Box>
            </div>
          </Grid>
          <Grid
            item
            xs={ 3 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <div style={ { position: 'absolute', bottom: '50%' } }>
              <Badge
                badgeContent={ cartItems }
                color="primary"
                sx={ { transform: iconScaling } }
              >
                <ShoppingCartIcon
                  sx={ { color: 'primary.main', transform: iconScaling } }
                  color="action"
                />
              </Badge>
            </div>
          </Grid>
        </Grid>
      </AppBar>
      <section className="children">{children}</section>
    </>
  );
}

export default Header;
