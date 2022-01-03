import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from 'components/molecules/product-card'
import { selectProducts } from 'redux/selectors/product.selector'
import { getProducts, setProduct } from 'redux/actions/action'
import './style.scss'
import { selectGlobalProductSelected } from 'redux/selectors/global.selector'
import { buttonContainer } from './misc'

function Products() {
  const dispatch = useDispatch()
  const prod = useSelector(selectProducts)
  const prodSelected = useSelector(selectGlobalProductSelected)

  useEffect(() => {
    dispatch(getProducts())
  }, [ dispatch ])

  const handleNavClick = (id: string) => {
    dispatch(setProduct({ productSelected: id }))
  }
  
  return (
    <div className="products-container">
      <nav className="navigation-container">
        {
          buttonContainer.map((btn) => (
            <button
              key={ btn.id }
              className={ `navigation-item ${ btn.id === prodSelected ? 'selected-button' : '' }` }
              onClick={ () => handleNavClick(btn.id) }
            >
              {btn.label}
            </button>
          ))
        }
      </nav>
      <section className="product-display">
        <div className='product-container-grid pc-grid--col-3 pc-grid--col-2 pc-grid--col-1'>
          {
            prod.length > 0 && prod.map(product => {

              if(prodSelected === null) {
                return (<ProductCard
                  key={ product.id }
                  heading={ product.name }
                  imageURL={ product.imageURL }
                  productDescription={ product.description }
                  price={ product.price }
                />)

              } else {
                if(product.category === prodSelected) {
                  return (<ProductCard
                    key={ product.id }
                    heading={ product.name }
                    imageURL={ product.imageURL }
                    productDescription={ product.description }
                    price={ product.price }
                  />)
                }
              }

            })
          }
        </div>
      </section>
    </div>
  )
}

export default Products
