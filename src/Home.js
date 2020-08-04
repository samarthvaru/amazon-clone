import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            <div className="home__row">
                <Product 
                id="123"
                title="The fault in our stars"
                price={ 12.00 }
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg"
                />
                <Product 
                id="123"
                title="The fault in our stars"
                price={ 10.00 }
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="123"
                title="The fault in our stars"
                price={ 12.50 }
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg"
                />
                <Product 
                id="123"
                title="The fault in our stars"
                price={ 12.00 }
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg"
                />
                <Product 
                id="123"
                title="The fault in our stars"
                price={ 12.00 }
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg"
                />
            </div>


        </div>
    )
}

export default Home
