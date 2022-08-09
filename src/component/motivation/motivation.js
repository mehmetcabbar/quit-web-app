import React, { useEffect } from 'react';
import './motivation.css';
import ScreenShot from '../../images/explore.svg';
import MotivationImages from '../../images/motivation.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Motivation() {
    useEffect(() => {
        Aos.init({ duration: 2000, disable: 'mobile' });
    }, [])
    return (
        <div id='motivation' className='motivationContainer'>
            <div data-aos="fade-right" className='motFirstBox'>
                <img src={MotivationImages} className='motTextBox' alt='motivation images' />
                <h4 className='smallTitle'>Follow your decision</h4>
                <h3 className='biggerTitle'>Explore your motivations</h3>
                <p className='basicText'>
                    Taking a big step in your life takes a lot of determination. You have decided to take the healthiest step for yourself by quitting smoking. When your decision to quit smoking is tested by nicotine craving, it's best to get help. Quit Buddy is at your side with hundreds of motivation and assistance options in every case you need. Just one touch is enough for the motivation you need. You will never be alone in this period.
                </p>
            </div>
            <div data-aos='fade-left' className='motSecondBox'>
                <img src={ScreenShot} className='motImage' alt='quit second screen' />
            </div>
        </div>
    )
}

export default Motivation;