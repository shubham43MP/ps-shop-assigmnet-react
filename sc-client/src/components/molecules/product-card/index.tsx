import React from 'react'
import './style.scss'

type ProductCardPropsType = {
  heading?: string;
  imageURL?: string;
  productDescription?: string;
  price?: number;
  handleProductClick: (val: string) => void;
  productId: string;
}

const ProductCard = ({
  heading='Fresho Pomegrante Peeled, 500 gm ',
  imageURL='/static/images/products/fruit-n-veg/pomegrante.jpg',
  productDescription='',
  price=12,
  productId,
  handleProductClick
}: ProductCardPropsType) => (
  <div className='pc-container'>
    <h3 className='pc-header'>{ heading }</h3>
    <article className='pc-article'>
      <img className="pc-article-img" src={ imageURL } alt={ heading }/>
      <div className='prod-desc-container'>
        <p className='pc-article-desc'>{`${ productDescription }`}</p>
      </div>
    </article>
    <button
      className='pc-btn'
      onClick={ () =>  handleProductClick(productId) }
    >
      {`Buy Now @ Rs. ${ price }`}
    </button>      
  </div>
)

export default ProductCard
