import React, { lazy } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectChangeEvent } from '@mui/material/Select';
import { selectProducts, selectProdLoading } from 'redux/selectors/product.selector'
import { addToCart } from 'redux/actions/global.action'
import { getProducts, setProduct } from 'redux/actions/product.action'
import {
  selectGlobalProductSelected,
  selectEnableBackdropAddCart,
  selectGlobalCart,
} from 'redux/selectors/global.selector'
import useNotification from 'hooks/useNotification'
import { buttonContainer } from './misc'
import './style.scss'

const SuspenseWrapper = lazy(() => import('components/wrappers/suspense-wrapper'))
const LoadingWrapper = lazy(() => import('components/wrappers/loading-wrapper'))
const BackdropComponent = lazy(() => import('components/molecules/backdrop'))
const Notification = lazy(() => import('components/molecules/notification'))
const LogggedinWrapper = lazy(() => import('components/wrappers/login-wrapper'))
const NavbarWrapper = lazy(() => import('components/wrappers/navbar-wrapper'))
const SelectComponentMobile = lazy(() => import('./product-select-mobile'))
const ProductCard = lazy(() => import('components/molecules/product-card'))
const CircularProgress = lazy(() => import('@mui/material/CircularProgress'))

function Products() {
  const dispatch = useDispatch()
  const prod = useSelector(selectProducts)
  const prodSelected = useSelector(selectGlobalProductSelected)
  const loading = useSelector(selectProdLoading)
  const enableBackdrop = useSelector(selectEnableBackdropAddCart)
  const {
    notification,
    handleNotificationClose,
    handleNotificationOpen
  } = useNotification()
  
  const cart = useSelector(selectGlobalCart)
  
  React.useEffect(() => {
    dispatch(getProducts())
  }, [ dispatch ])
  
  React.useEffect(() => window.scrollTo(0, 0), [])
  
  const handleNavClick = (id: string) => {
    dispatch(setProduct({ productSelected: id }))
  }
  
  const handleProductClick = (id: string) => {
    if(cart.find(item => item.id === id)) {
      handleNotificationOpen({ al: 'Item already exists in cart', severity: 'error' })
      return
    }
    const [ cartMember ] = prod.filter(pr => pr.id === id)
    dispatch(addToCart({ item: cartMember }))
  }

  const handleChange = (event: SelectChangeEvent) => {
    handleNavClick(event.target.value)
  }
  
  return (
    <>
      <SuspenseWrapper>
        <LogggedinWrapper>
          <NavbarWrapper>
            <div className="products-container">
              <nav className="navigation-container">
                {
                  buttonContainer.map((btn) => (
                    <button
                      key={ btn.id }
                      className={ `navigation-item ${ btn.id === prodSelected ? 'selected-button' : '' }` }
                      onClick={ () => handleNavClick(btn.id) }
                    >
                      {btn.label}
                    </button>
                  ))
                }
              </nav>
              <div className='select-component-mobile'>
                <SelectComponentMobile
                  buttonContainer={ buttonContainer }
                  handleChange={ handleChange }
                  value={ prodSelected }
                />
              </div>
              <section className="product-display">
                {
                  <LoadingWrapper loading={ loading }>
                    <div className='product-container-grid pc-grid--col-3 pc-grid--col-2 pc-grid--col-1'>
                      {
                        prod.length > 0 && prod.map(product => {
                          if(prodSelected === undefined) {
                            return (<ProductCard
                              key={ product.id }
                              heading={ product.name }
                              imageURL={ product.imageURL }
                              productDescription={ product.description }
                              price={ product.price }
                              productId={ product.id }
                              handleProductClick={ handleProductClick }
                            />)

                          } else {
                            if(product.category === prodSelected) {
                              return (<ProductCard
                                key={ product.id }
                                heading={ product.name }
                                imageURL={ product.imageURL }
                                productDescription={ product.description }
                                price={ product.price }
                                productId={ product.id }
                                handleProductClick={ handleProductClick }
                              />)
                            }
                          }
                        })
                      }
                    </div>
                  </LoadingWrapper>
                }
              </section>
            </div>
            <BackdropComponent open = { enableBackdrop }>
              <CircularProgress color='secondary' />
            </BackdropComponent>
            <Notification
              severity={ notification.severity }
              alertLabel={ notification.alertLabel }
              handleClose={ handleNotificationClose }
              open={ notification.open }
            />
          </NavbarWrapper>
        </LogggedinWrapper>
      </SuspenseWrapper>
    </>
  )
}

export default Products
