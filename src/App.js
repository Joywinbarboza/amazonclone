import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const promise =loadStripe("pk_test_51O1pppSA7pvps57WmHG6cB5T4x4bIp6pmt1eZjTjfCFbTfBVDNEW7UMHL60FlH0JtkpQt8fXjqKqyyfE0HdyIqJV00RO39c3m5");

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the component is loaded
    auth.onAuthStateChanged(authUser=>
    {
      console.log('THE USER IS >>> ',authUser);

      if(authUser){
        //The user just logged in or the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/payment" element={[<Elements stripe={promise}><Payment/></Elements>]} />
          {/* <Route path="/payment" element={[<Payment />]} /> */}
          <Route path="/" element={[<Home />]} />
          <Route path="/orders" element={[<Orders />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


