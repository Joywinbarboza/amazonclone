import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';





function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


    return (
        // <motion.div whileHover={{ scale: 1.2 }} >
            <div className='product'>
                <img src={image} />
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}

                    </div>
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        // </motion.div>
    )
}

export default Product