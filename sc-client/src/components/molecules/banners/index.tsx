/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react'
import { BannerType } from '../../../types/banners'
import './styles.scss'

type BannerPropType = {
  data: BannerType[]
}

function Banners({ data = [] }: BannerPropType) {
  const [ index, setIndex ] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      2000
    )

    return () => {
      resetTimeout()
    }
  }, [ index, data ])
  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={ { transform: `translate3d(${ -index * 100 }%, 0, 0)` } }
        >
          { data.map((bannerdata, index) => (
            <div
              className="slide"
              key={ index }
            >
              <div className='banner-image-container'>
                <img
                  className='banner-image'
                  src={ bannerdata.bannerImageUrl }
                  alt={ bannerdata.bannerImageAlt }
                />
              </div>
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {data.map((_, idx) => (
            <div
              key={ _.id }
              className={ `slideshowDot${ index === idx ? ' active' : '' }` }
              onClick={ () => setIndex(idx) }
              onKeyUp={ () => setIndex(idx) }
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Banners
