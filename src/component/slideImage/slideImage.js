import React, { useEffect } from 'react';
import './slideImageCss.css';
import Typical from 'react-typical';
import MainScreen from '../../images/main.svg';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function SlideImage() {
    useEffect(() => {
        Aos.init({ duration: 2000, disable: 'mobile' });
    }, [])
    return (
        <div className='firstImageContainer'>
            <div className='firstSliderBox'>
                <div data-aos="fade-down" className='sliderTextBox'>
                    <h1 className='sliderTitle'>
                        Quit smoking
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
                        Explore your motivations. Track your individual achievements <br className='brclass' />
                        and see your health improvements. Check how much money <br className='brclass' />
                        you have saved whenever you want via Quit Buddy.
                    </div>
                    <div className='downloadLink'>
                        <div className='googleLink'>
                            <a href='https://play.google.com/store/apps/details?id=com.quitbuddyforme' target='blank'>
                                <img src={GoogleLink} className='googleImage' alt='google play' />
                            </a>
                        </div>
                        <div className='appStoreLink'>
                            <a href='https://apps.apple.com/us/app/quit-buddy/id1640005942' target='blank'>
                                <img src={AppStoreLink} className='appStoreImage' alt='app store' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className='secondSliderBox'>
                <img src={MainScreen} className='sliderScreenImage' alt='quit screen' />
            </div>
        </div>
    )
}

export default SlideImage;