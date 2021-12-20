import React, { useEffect, useState } from 'react'
import OfferCategory from '../../components/molecules/offer-category'

function Homepage() {
  const [ category, setCategory ] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/banners')
      .then(response => response.json())
      .then(data => setCategory(data))
  }, [])

  console.log('CATEGORY', category)
  return (
    <div>
        HOMEPAGE
      <OfferCategory
        imageURL='/static/images/category/bakery.png'
        title="Beverages"
        subtitle="Explore range fo beverages"
      />
    </div>
  )
}

export default Homepage
