import React from 'react'
import { useNavigate } from 'react-router-dom'
import OfferCategory from 'components/molecules/offer-category'
import Banners from 'components/molecules/banners'
import { useSelector, useDispatch } from 'react-redux'
import { selectBanner } from 'redux/selectors/banner.category'
import { selectCategory } from 'redux/selectors/category.selector'
import { getBanner, getCategory } from 'redux/actions/action'
import { setProduct } from 'redux/actions/action'

function Homepage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const category = useSelector(selectCategory)
  const banners = useSelector(selectBanner)

  React.useEffect(() => {
    dispatch(getBanner())
    dispatch(getCategory())
  }, [ dispatch ])

  const handleOfferClick = (id: string) => {
    dispatch(setProduct({ productSelected: id }))
    navigate('/products')
  }
  
  return (
    <div>
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
    </div>
  )
}

export default Homepage
