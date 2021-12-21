import React, { useEffect, useState } from 'react'
import OfferCategory from '../../components/molecules/offer-category'
import Banners from '../../components/molecules/banners'
import { BannerType } from '../../types/banners'
import { CategoryType } from '../../types/category'
import { SHOPPING_CATEGORIES, SHOPPING_BANNERS } from '../../apis/urls'
import Header from '../../components/molecules/header'

function Homepage() {
  const [ category, setCategory ] = useState<CategoryType[]>([])
  const [ banners, setBanners ] = useState<BannerType[]>([])

  useEffect(() => {
    Promise.all([
      fetch(SHOPPING_CATEGORIES)
        .then(response => response.json())
        .then(data => setCategory(data)),
      fetch(SHOPPING_BANNERS)
        .then(response => response.json())
        .then(data => setBanners(data)),
    ])
  }, [])
  
  return (
    <div>
      <Header />
      <Banners data={ banners } />
      {
        category.map((cat, index) => (
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
