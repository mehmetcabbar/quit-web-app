import React, { useEffect } from 'react';
import './download.css';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Download() {
    useEffect(() => {
        Aos.init({ duration: 2000, disable: 'mobile' });
    }, [])
    return (
        <div className='downloadContainer'>
            <div className='downloadWrapper'>
                <h3 className='downloadtitle'>Download Quit Buddy</h3>
                <h6 className='downloadSubTitle'>Take a step towards your healthy future now.</h6>
                <p className='downloadText'>
                    You are the biggest investor in your own life. <br className='brclass' />
                    Today you can take a step to live healthy, happy and away from the risks of disease. <br className='brclass' />
                    Quit smoking via Quit Buddy. Download now! <br className='brclass' />

                </p>
                <div data-aos="fade-up" className='lasDownloadBox'>
                    <a href='https://play.google.com/store/apps/details?id=com.quitbuddyforme' target='blank' className='linkPadding'>
                        <img src={GoogleLink} alt='google link' />
                    </a>
                    <a href='/#' className='appStoreLinkPadding'>
                        <img src={AppStoreLink} alt='app store link' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Download