import React from 'react'
import { Gallery } from "./Gallery/Gallery";
import { Information } from './Information/Information';
import { Questions } from "./Questions/Questions";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { ProductFeatures } from "./ProductFeatures/ProductFeatures";
import { ProductPrice } from './ProductPrice/ProductPrice';
import { SellerInfo } from './SellerInfo/SellerInfo';
import { SellerPosts } from "./SellerPosts/SellerPosts";
import './ProductDetails.scss'

export const ProductDetails = () => {
	return (
		<section className="main-container product-details-grid bg-white">

			<article className="right-column">
				<ProductPrice />
				<SellerInfo />
				<Information />
			</article>

			<article className="left-column">
				<Gallery />
				<div className="mx-30px">
					<SellerPosts />
					<ProductFeatures />
					<ProductDescription />
					<Questions />
				</div>
			</article>
			
		</section>
	)
}

export default ProductDetails