import React, { useState, useEffect } from 'react'
import { SHOPPING_PRODUCTS } from '../../apis/urls'
import { ProductType } from '../../types/products'
import './style.scss'

function Products() {

  const [ products, setproducts ] = useState<ProductType[]>([])

  useEffect(() => {
    Promise.all([
      fetch(SHOPPING_PRODUCTS)
        .then(response => response.json())
        .then(data => setproducts(data))
    ])
  }, [])
  

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
        {
          products.map( product => {
            return (<p key={product.id}>{product.name}</p> )
          })
        }
      </section>
    </div>
  )
}

export default Products
