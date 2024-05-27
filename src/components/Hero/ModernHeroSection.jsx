import React from 'react'
import styled from 'styled-components'

export const ModernHeroSection = () => {
    return (
        <HeroWrapper>
            <div className='grid grid-cols-2 gap-2 h-[600px]'>
                <div className='womens'></div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='mens'></div>
                    <div className='kids'></div>
                    <div className='cosmetics'></div>
                    <div className='accessories'></div>

                </div>
            </div>
        </HeroWrapper>
    )
}
const HeroWrapper = styled.div`
.womens{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/categories/category-1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.mens{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.kids{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.cosmetics{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.accessories{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`
