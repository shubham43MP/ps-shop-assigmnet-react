import React from 'react'
import './style.scss'

type ProductCardPropsType = {
  heading?: string;
  imageURL?: string;
  productDescription?: string;
  price?: number;
}

function ProductCard({
  heading='Fresho Pomegrante Peeled, 500 gm ',
  imageURL='/static/images/products/fruit-n-veg/pomegrante.jpg',
  productDescription='Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.',
  price=88,
}: ProductCardPropsType) {
  return (
    <div className='pc-container'>
      <h3 className='pc-header'>{ heading }</h3>
      <article className='pc-article'>
        <img className="pc-article-img" src={imageURL} alt={heading}/>
        {/* <p className='pc-article-desc'>{`${productDescription.substring(0, 88)}...`}</p> */}
        <p className='pc-article-desc'>{productDescription}</p>
      </article>
      <button className='pc-btn'>{`Buy Now @ Rs. ${ price }`}</button>      
    </div>
  )
}

export default ProductCard
