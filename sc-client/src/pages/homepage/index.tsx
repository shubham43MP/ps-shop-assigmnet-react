import React, { useEffect, useState } from 'react'
import OfferCategory from '../../components/molecules/offer-category'
import { CategoryType } from '../../types/category'

function Homepage() {
  const [ category, setCategory ] = useState<CategoryType[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(response => response.json())
      .then(data => setCategory(data))
  }, [])
  
  return (
    <div>
        HOMEPAGE
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
