import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const [move, setMove] = useState(true);

    const removeFromBasket = () => {
        // setMove(!move);
        console.log(move ? "true" : "false");
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <AnimatePresence>
            {move && (<motion.div
                key={id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 100 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{
                    duration: "1"
                }}
            >
                <div className='checkoutProduct'>
                    <img src={image} className="checkoutProduct__image" />
                    <div className="checkoutProduct__info">
                        <p className="checkoutProduct__title">{title}</p>
                        <p className="checkoutProduct__price">
                            <small>₹</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="checkoutProduct__rating">
                            {Array(rating).fill().map((_, i) => (
                                <p>⭐</p>
                            ))}
                        </div>
                        <button onClick={removeFromBasket}>Remove from basket</button>
                    </div>
                </div>
            </motion.div>)}
        </AnimatePresence>
    )
}

export default CheckoutProduct