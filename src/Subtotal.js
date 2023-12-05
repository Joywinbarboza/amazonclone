import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
import { getBasketTotal } from './reducer';

function Subtotal() {
  const history = useNavigate();
  const [{basket},dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e =>history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal