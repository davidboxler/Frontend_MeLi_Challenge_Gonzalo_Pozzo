import React from 'react'
import product from '../../../mocks/mock'
import './ProductDescription.scss'

export const ProductDescription = () => {
  return (
    <section>
			<hr className="product-details-hr" />
			<h2 className="product-details-subtitle">Descripcion</h2>
			<p className="product-description">{ product.description.value }</p>
		</section>
  )
}

export default ProductDescription