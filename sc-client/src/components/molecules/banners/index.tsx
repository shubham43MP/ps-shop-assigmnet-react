import React from 'react'
import { BannerType } from '../../../types/banners'
import './styles.scss'

type BannerPropType = {
  data: BannerType[]
}

function Banners({ data = [] }: BannerPropType) {
  return (
    <div className='banner-image-container'>
      <img
        className='banner-image'
        src="/static/images/offers/offer1.jpg"
        alt="Independence Day Deal - 25% off on shampoo"
      />
    </div>
  )
}

export default Banners
