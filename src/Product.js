import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>1199</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/51wikpz2l6L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product