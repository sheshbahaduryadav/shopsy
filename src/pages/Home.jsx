import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import TopProducts from '../components/TopProducts/TopProducts'
import Banner from '../components/Banner/Banner'
import Subscribe from '../components/Subscribe/Subscribe'
import Testimonials from '../components/Testimonials/Testimonials'
import Popup from '../components/Popup/Popup'
import { LatestProduct } from '../components/Latest-Product/LatestProduct'
import { ModernHeroSection } from '../components/Hero/ModernHeroSection'

export const Home = ({ handleOrderPopup, orderPopup, setOrderPopup }) => {
    return (
        <>
            {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
            <ModernHeroSection />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Products />
            <LatestProduct />
            <Testimonials />
            <Subscribe />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /></>
    )
}
