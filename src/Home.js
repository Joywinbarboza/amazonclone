import React, { useEffect, useState } from 'react';
import Header from "./Header";
import "./Home.css";
import Product from './Product';






function Home() {
    useEffect(() => {
        // Get the button element
        var backToTopButton = document.getElementById("back-to-top");
    
        // Add a scroll event listener
        window.addEventListener("scroll", function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });
    
        // Add a click event listener
        backToTopButton.addEventListener("click", function () {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
    }, []); // The empty dependency array ensures this effect runs only once after the component is mounted.

    const images = [
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
        "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg", // Replace with the actual URL of your second image
        "https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg",  // Replace with the actual URL of your third image
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the current image index to the next one
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 5 seconds (5000 milliseconds)

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, [images]);



    return (
        <>
            <Header />
            <div className="home">
                <div className="home__1">

                    <div className="home__container">
                        <img className="home__image" src={images[currentImageIndex]} alt="" />

                        <div className="home__row">

                            <Product id="12321341"
                                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
                                price={2999}
                                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
                                rating={5} />

                            <Product id="49538094"
                                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                                price={2390}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg" />

                            <Product id="49538095"
                                title="ASUS TUF Gaming F17 (2023) Gaming Laptop, 17.3” FHD 144Hz Display, GeForce RTX 4050, AMD Ryzen 7 7735HS, 16GB DDR5, 1TB PCIe 4.0 SSD, Wi-Fi 6, Windows 11, FA707NU-DS74,Mecha Gray"
                                price={10099}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/71dHv-xGSoL._AC_SX466_.jpg" />
                            <Product id="49538096"
                                title="Motorola Moto G Stylus | 2022 | 2-Day Battery | Unlocked | Made for US 4/128GB | 50MP Camera | Twilight Blue"
                                price={129.36}
                                rating={4} // Randomly generated rating
                                image="https://m.media-amazon.com/images/I/61Q-xaqufQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                            />


                        </div>

                        <div className="home__row">
                            <Product id="4903850"
                                title="Samsung LC49RG905SUXEN 49 Curved LED Gaming Monitor"
                                price={19999}
                                rating={3}
                                image="https://m.media-amazon.com/images/I/81Butfqtj5L._AC_SX679_.jpg" />
                            <Product id="23445930"
                                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                                price={9899}
                                rating={5}
                                image="https://d30wkz0ptv5pwh.cloudfront.net/media/catalog/product/e/c/echo-dot-_3rd-gen_-smart-speaker-with-alexa---charcoal-fabric-4.jpg?width=1000&height=1320&store=mobileciti&image-type=image" />
                            <Product id="3254354345"
                                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                                price={59899}
                                rating={4}
                                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
                        </div>

                        <div className="home__row">
                            <Product id="90829332"
                                title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L. AC_SX355_.jpg"
                                price={109498}
                                rating={4} />
                            <Product id="49538096"
                                title="Xixaomiro i14Pro Max 5G Cell Phone, Unlocked Android Smartphone, 8GB+512GB, 6.8'' FHD Display Screen, 13MP+48MP Camera, 6000mAh Battery, Dual Sim Card,1TB Expandable Storage (Black)"
                                price={12399}
                                rating={4} // Randomly generated rating
                                image="https://m.media-amazon.com/images/I/71Gw4rywpsL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                            />

                        </div>
                        <div className="home__row">
                            <Product id="49538097"
                                title="SAMSUNG Galaxy A14 4G LTE (128GB + 4GB) Unlocked Worldwide (Only T-Mobile/Mint/Metro USA Market) 6.6\ 50MP Triple Camera + (15W Wall Charger) (Black (SM-A145M/DS))"
                                price={132000}
                                rating={4} // Randomly generated rating
                                image="https://m.media-amazon.com/images/I/71OK4AU02jL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                            />
                            <Product id="49538098"
                                title="Motorola Moto G Stylus 5G | 2021 | 2-Day Battery | Unlocked | Made for US 4/128GB | 48MP Camera | Cosmic Emerald"
                                price={149999}
                                rating={5} // Randomly generated rating
                                image="https://m.media-amazon.com/images/I/51bfhhUKhTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                            />
                            <Product id="49538099"
                                title="Patanjali Saundarya Aloe Vera Kesar Chandan Gel - 150 ml (Pack of 2)"
                                price={947}
                                rating={4} // Randomly generated rating
                                image="https://m.media-amazon.com/images/I/71CvM1ntN1L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                            />

                        </div>
                    </div>
                </div>
                <div id="back-to-top">
                    <span>Back to top</span>
                </div>
                <div className="home__bottom">
                    <div className="home__bottom__partition">
                        <b> Get to Know Us</b>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">About Amazon</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Amazon Devices</a>
                        <a href="#">Amazon Science</a>
                    </div>
                    <div className="home__bottom__partition">
                        <b>Make Money with Us</b>
                        <a href="#">Sell products on Amazon</a>
                        <a href="#">Sell on Amazon Business</a>
                        <a href="#">Sell apps on Amazon</a>
                        <a href="#">Become an Affiliate</a>
                        <a href="#">Advertise Your Products</a>
                        <a href="#">Self-Publish with Us</a>
                        <a href="#">Host an Amazon Hub</a>
                        <a href="#">See More Make Money with Us</a>
                    </div>
                    <div className="home__bottom__partition">
                        <b>Amazon Payment Products</b>
                        <a href="#">Amazon Business Card</a>
                        <a href="#">Shop with Points</a>
                        <a href="#">Reload Your Balance</a>
                        <a href="#">Amazon Currency Converter</a>
                    </div>
                    <div className="home__bottom__partition">
                        <b>Let Us Help You</b>
                        <a href="#">Amazon and COVID-19</a>
                        <a href="#">Your Account</a>
                        <a href="#">Your Orders</a>
                        <a href="#">Shipping Rates & Policies</a>
                        <a href="#">Returns & Replacements</a>
                        <a href="#">Manage Your Content and Devices</a>
                        <a href="#">Amazon Assistant</a>
                        <a href="#">Help</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home