import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { SABKA_BAZAR_LOGO_PATH } from 'apis/constants';
import Button from 'components/atoms/buttons';
import { selectGlobalCart, selectIsLogin } from 'redux/selectors/global.selector'
import BackdropComponent from 'components/molecules/backdrop';
import Cart from 'components/molecules/cart';
import { userLogout } from 'redux/actions/action';
import { appBarStyle, iconScaling } from './style';
import './style.scss'

function Header() {
  const history = useNavigate()
  const location = useLocation()
  const cart = useSelector(selectGlobalCart, shallowEqual)
  const isLoggedIn = useSelector(selectIsLogin, shallowEqual)
  const dispatch = useDispatch()
  const [ backdropEnable, setbackdropEnable ] = React.useState<boolean>(false)

  const handleHomeClick = () => {
    if(location.pathname !== '/home') history('/home')
  }

  const handleProductClick = () => {
    if(location.pathname !== '/products') history('/products') 
  }

  const handleCartOpen = () => {
    setbackdropEnable(true)
  }

  const handleCartClose = () => {
    setbackdropEnable(false)
  }

  const handleLogout = () => {
    dispatch(userLogout())
    sessionStorage.removeItem('access-token')
    history('/login')
  }
  return (
    <>
      <AppBar sx={ appBarStyle } position="sticky">
        <Grid container sx={ { padding: '1%' } }>
          <Grid
            item
            xs={ 10 }
            sm={ 11 }
            md={ 11 }
            lg={ 11 }
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
                  marginLeft: '4rem',
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
                <Button handleClick={ handleHomeClick } label='Home' />
                <Button handleClick={ handleProductClick } label='Products' />
              </Box>
            </div>
          </Grid>
          <Grid
            item
            xs={ 2 }
            sm={ 1 }
            md={ 1 }
            lg={ 1 }
            sx={ { display: 'flex', justifyContent: 'center' } }
          >
            <div className="signin-signout-register">
              {
                isLoggedIn ?
                  <>
                    <a className='signin-links' href="#" onClick={ handleLogout } >Logout</a>
                  </>
                  : 
                  <>
                    <a className='signin-links' href='/login'>Login</a>
                    <a className='signin-links' href='/register'>Register</a>
                  </>
              }
            </div>
            <div className='badge-logo-container'>
              <Badge
                badgeContent={ cart.length || 0 }
                color="primary"
                sx={ { transform: iconScaling } }
              >
                <ShoppingCartIcon
                  sx={ { color: 'primary.main', transform: iconScaling, cursor: 'pointer' } }
                  color="action"
                  onClick={ handleCartOpen }
                />
              </Badge>
            </div>
          </Grid>
        </Grid>
        <BackdropComponent open={ backdropEnable }>
          <Cart cart={ cart } handleClose={ handleCartClose }/>
        </BackdropComponent>
      </AppBar> 
    </>
  )
}

export default Header
