import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="Checkout__ad" />
                <div>
                    <h2 className="Checkout__title">
                        "title here"
                        {/* {Basket Item} */}
                        {/* {Basket Item} */}
                        {/* {Basket Item} */}
                        {/* {Basket Item} */}
                    </h2>
                </div>
            </div>
            <div className="Checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout