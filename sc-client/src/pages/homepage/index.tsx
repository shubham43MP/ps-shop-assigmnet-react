import React, { lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectBanner, selectLoading } from 'redux/selectors/banner.category'
import { selectCategory } from 'redux/selectors/category.selector'
import { getBanner, getCategory } from 'redux/actions/action'
import { setProduct } from 'redux/actions/action'
import './style.scss'

const OfferCategory = lazy(() => import('components/molecules/offer-category'))
const Banners = lazy(() => import('components/molecules/banners'))
const CircularLoader = lazy(() => import('components/molecules/circular-loader'))
const LogggedinWrapper = lazy(() => import('components/wrappers/login-wrapper'))
const NavbarWrapper = lazy(() => import('components/wrappers/navbar-wrapper'))
const SuspenseWrapper = lazy(() => import('components/wrappers/suspense-wrapper'))

function Homepage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const category = useSelector(selectCategory)
  const banners = useSelector(selectBanner)
  const loading = useSelector(selectLoading)

  React.useEffect(() => {
    dispatch(getBanner())
    dispatch(getCategory())
  }, [ dispatch ])

  const handleOfferClick = (id: string) => {
    dispatch(setProduct({ productSelected: id }))
    navigate('/products')
  }
  
  return (
    <>
      <SuspenseWrapper>
        <LogggedinWrapper>        
          <NavbarWrapper>
            {
              loading ?
                <div className='home-loader'>
                  <CircularLoader />
                </div>
                :
                <>
                  <Banners data={ banners } />
                  {
                    category.length > 0 && category.map((cat, index) => (
                      <OfferCategory
                        imageURL={ cat.imageUrl }
                        title={ cat.name }
                        subtitle={ cat.description }
                        key={ cat.id }
                        direction={ index }
                        categoryId={ cat.id }
                        handleOfferClick={ handleOfferClick }
                      />
                    ))
                  }
                </>
            }
          </NavbarWrapper>
        </LogggedinWrapper>
      </SuspenseWrapper>
    </>
  )
}

export default Homepage
