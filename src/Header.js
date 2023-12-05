import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            alert("YOU HAVE LOGGED OUT");
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">

                        <span className="header__optionLineOne">
                            Hello {user ? user?.email:"Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        and Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    {/* <img src="amazon_cart.jpg"/> */}
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header;