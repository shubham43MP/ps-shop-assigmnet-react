import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from 'components/molecules/product-card'
import { selectProducts, selectProdLoading } from 'redux/selectors/product.selector'
import { getProducts, setProduct, addToCart, setNotification } from 'redux/actions/action'
import {
  selectGlobalProductSelected,
  selectEnableBackdropAddCart,
  selectGlobalCart,
  selectNotificationState
} from 'redux/selectors/global.selector'
import CircularLoader from 'components/molecules/circular-loader'
import { buttonContainer } from './misc'
import './style.scss'
import BackdropComponent from 'components/molecules/backdrop'
import Notification from 'components/molecules/notification'
import { Severity } from 'types/common.types'

function Products() {
  const dispatch = useDispatch()
  const prod = useSelector(selectProducts)
  const prodSelected = useSelector(selectGlobalProductSelected)
  const loading = useSelector(selectProdLoading)
  const enableBackdrop = useSelector(selectEnableBackdropAddCart)
  
  const cart = useSelector(selectGlobalCart)
  const notification = useSelector(selectNotificationState)
  
  React.useEffect(() => {
    dispatch(getProducts())
  }, [ dispatch ])
  
  React.useEffect(() => window.scrollTo(0, 0), [])
  
  const handleNavClick = (id: string) => {
    dispatch(setProduct({ productSelected: id }))
  }
  
  const handleProductClick = (id: string) => {
    const [ cartMember ] = prod.filter(pr => pr.id === id)
    dispatch(addToCart({ item: cartMember }))
  }

  const handleNotificationClose = () => {
    dispatch(setNotification({
      notification: {
        open: false
      }
    }))
  }

  const handleNotificationOpen = (al: string, severity: Severity) => {
    dispatch(setNotification({
      notification: {
        open: true,
        alertLabel: al,
        severity: severity.severity
      }
    }))
  }
  
  return (
    <>
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
        <section className="product-display">
          {
            loading ? (
              <div className='circular-loader'>
                <CircularLoader />
              </div>
            ) : 
              <div className='product-container-grid pc-grid--col-3 pc-grid--col-2 pc-grid--col-1'>
                {
                  prod.length > 0 && prod.map(product => {
                    if(prodSelected === null) {
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
          }

        </section>
      </div>
      <BackdropComponent open = { enableBackdrop }/>
      <Notification
        severity={ notification.severity }
        alertLabel={ notification.alertLabel }
        handleClose={ handleNotificationClose }
        open={ notification.open }
      />
    </>
  )
}

export default Products
