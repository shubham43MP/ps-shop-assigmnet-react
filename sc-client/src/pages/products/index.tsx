import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../../components/molecules/product-card'
import { selectProducts } from '../../redux/selectors/product.selector'
import './style.scss'
import { getProducts } from '../../redux/actions/action'

function Products() {
  const dispatch = useDispatch()
  const prod = useSelector(selectProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [ dispatch ])
  
  return (
    <div className="products-container">
      <nav className="navigation-container">
        <a className="navigation-item" href="#">Fruits & Vegetables</a>
        <a className="navigation-item" href="#">Bakery Cakes and Diary</a>
        <a className="navigation-item" href="#">Beverages</a>
        <a className="navigation-item" href="#">Beauty and Hygiene</a>
        <a className="navigation-item" href="#">Baby Care</a>
      </nav>
      <section className="product-display">
        <div className='product-container-grid pc-grid--col-3 pc-grid--col-2 pc-grid--col-1'>
          {
            prod && prod.length > 0 && prod.map(product => {
              return (<ProductCard
                key={ product.id }
                heading={ product.name }
                imageURL={ product.imageURL }
                productDescription={ product.description }
                price={ product.price }
              />)
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Products
