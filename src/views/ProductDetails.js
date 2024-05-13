import React from "react";
import { Gallery } from "../components/Gallery";
import { Information } from "../components/Information";
import { ProductDescription } from "../components/ProductDescription";
import { ProductFeatures } from "../components/ProductFeatures";
import { ProductPrice } from "../components/ProductPrice";
import { Questions } from "../components/Questions";
import { SellerInfo } from "../components/SellerInfo";
import { SellerPosts } from "../components/SellerPosts";
import useWindowWidth from "../hooks/useWindowWidth";

export const ProductDetails = () => {
  const width = useWindowWidth();

  return (
    <section className="main-container product-details-grid bg-white">
      <article className="right-column">
        {width <= 1200 && <Gallery />}
        <ProductPrice />
        <SellerInfo />
        <Information />
      </article>

      <article className="left-column">
        {width > 1200 && <Gallery />}
        
        <div className="mx-30px">
          <SellerPosts />
          <ProductFeatures />
          <ProductDescription />
          <Questions />
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
