import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { useStateValue } from './StateProvider';

function Header() {
    
    const [{basket},dispatch] = useStateValue();

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
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>
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
                <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                </span>
            </div>
            </Link>
        </div>
    )
}

export default Header;