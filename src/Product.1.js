import React from 'react';

export function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        <p>⭐</p>;
                    })}

                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/51wikpz2l6L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
            <button>Add to Basket</button>
        </div>
    );
}
