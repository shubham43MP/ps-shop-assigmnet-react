import React from 'react'
import OfferCategory from '../../components/molecules/offer-category'
import Banners from '../../components/molecules/banners'
import { useSelector, useDispatch } from 'react-redux'
import { selectBanner } from '../../redux/selectors/banner.category'
import { selectCategory } from '../../redux/selectors/category.selector'
import { getBanner, getCategory } from '../../redux/actions/action'

function Homepage() {
  const dispatch = useDispatch()
  const category = useSelector(selectCategory)
  const banners = useSelector(selectBanner)

  React.useEffect(() => {
    dispatch(getBanner())
    dispatch(getCategory())
  }, [ dispatch ])
  
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
          />
        ))
      }
    </div>
  )
}

export default Homepage
