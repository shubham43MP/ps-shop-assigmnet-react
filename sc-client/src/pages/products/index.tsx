import React from 'react'
import './style.scss'

function Products() {
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
        PRODUCTS DISPLAY
      </section>
    </div>
  )
}

export default Products
