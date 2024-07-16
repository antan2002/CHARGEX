import React from 'react';
import "./Products.scss";
import Product from './Product/Product';
import { Context } from "../../Store/Context";
import { useContext } from "react";

const Products = ({ innerLine, headingText }) => {
    const { products } = useContext(Context);

    return (
        <div className="product-content">
            {!innerLine && <div className="sec-head">{headingText}</div>}
            <div className="product">
                {products.map((item) => (
                    <Product key={item.id} name={item.name} price={item.price} img={item.image} id={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Products;
