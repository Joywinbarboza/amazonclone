import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();

    return (
        <>
        <Header/>
        <div className="Checkout">
            <div className="Checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="Checkout__ad" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="Checkout__title">
                        Your shopping basket
                    </h2>
                    
                    {basket.map(item=>
                        <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        />)}
                    
                </div>
            </div>
            <div className="Checkout__right">
                <Subtotal/>
            </div>
        </div>
        </>
    )
}

export default Checkout