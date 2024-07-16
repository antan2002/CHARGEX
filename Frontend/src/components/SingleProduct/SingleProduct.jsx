import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";
import { useState } from 'react';
import { Context } from "../../Store/Context";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import "./SingleProduct.scss";

const SingleProduct = () => {

    const [quantity, setQuentity] = useState(1);
    const { id } = useParams();
    const { products } = useContext(Context);
    const { handleAddToCart } = useContext(Context);

    const singleProduct = products.find(product => product.id === parseInt(id));

    const increment = () => {
        setQuentity(prev => prev + 1);
    }
    const decrement = () => {
        setQuentity(prev => {
            if (prev === 1) {
                return prev
            } else {
                return prev - 1;
            }
        });
    }

    if (!singleProduct) {
        return <div className="single-product-name-content">Product not found</div>;
    }

    return (
        <div className="single-product-name-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <div className="image-container">
                            <img src={singleProduct.image} alt={singleProduct.name} />
                        </div>
                    </div>
                    <div className="right">
                        <span className="name">{singleProduct.name}</span>
                        <span className="price">&#8377;{singleProduct.price}</span>
                        <span className="spec">{singleProduct.desc}</span>
                        <div className="cart">
                            <div className="q-button">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="cart-btn" onClick={() => {
                                handleAddToCart(singleProduct, quantity);
                                setQuentity(1)
                            }}>
                                <IoCart size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"></span>
                        <div className="info">
                            <br />
                            <span className="bold">
                                Share:
                                <span className="share">
                                    <TfiFacebook size={16} />
                                    <FaInstagram size={16} />
                                    <FaTwitter size={16} />
                                    <GrAmazon size={16} />
                                    <FaWhatsapp size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
