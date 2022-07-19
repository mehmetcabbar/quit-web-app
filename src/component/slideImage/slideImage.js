import React, { useEffect } from 'react';
import './slideImageCss.css';
import Typical from 'react-typical';
import Screen from '../../images/screen.svg';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function SlideImage() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='firstImageContainer'>
            <div className='firstSliderBox'>
                <div className='sliderTextBox'>
                    <h1 className='sliderTitle'>
                        Quit Smoking
                    </h1>
                    <div className='sliderTypicalTitle'>
                        <Typical
                            steps={[
                                'for your future',
                                3000,
                                'for your health',
                                3000,
                                'for your money',
                                3000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                    <div className='sliderText'>
                        Track your individual achievements, health improvements and <br className='brclass' />
                        see how much money you save.
                    </div>
                    <div className='downloadLink'>
                        <div className='googleLink'>
                            <a href='/#'>
                                <img src={GoogleLink} className='googleImage' alt='google play' />
                            </a>
                        </div>
                        <div className='appStoreLink'>
                            <a href='/#'>
                                <img src={AppStoreLink} className='appStoreImage' alt='app store' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className='secondSliderBox'>
                <img src={Screen} className='sliderScreenImage' alt='quit screen' />
            </div>
        </div>
    )
}

export default SlideImage;