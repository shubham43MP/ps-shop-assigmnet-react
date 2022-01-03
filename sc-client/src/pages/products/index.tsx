import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import ProductCard from 'components/molecules/product-card'
import { selectProducts } from 'redux/selectors/product.selector'
import { getProducts } from 'redux/actions/action'
import './style.scss'

function Products() {
  const dispatch = useDispatch()
  const prod = useSelector(selectProducts)
  const params = useParams()

  console.log('usePrams', params, Object.keys(params))

  useEffect(() => {
    dispatch(getProducts())
  }, [ dispatch ])
  
  return (
    <div className="products-container">
      <nav className="navigation-container">
        <a className="navigation-item" href="/products/fruits_veg">Fruits & Vegetables</a>
        <a className="navigation-item" href="/products/bakery_dairy">Bakery, Cakes and Dairy</a>
        <a className="navigation-item" href="/products/beverages">Beverages</a>
        <a className="navigation-item" href="/products/beauty_hygiene">Beauty and Hygiene</a>
        <a className="navigation-item" href="/products/baby_care">Baby Care</a>
      </nav>
      <section className="product-display">
        <div className='product-container-grid pc-grid--col-3 pc-grid--col-2 pc-grid--col-1'>
          {
            prod.length > 0 && prod.map(product => {
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
