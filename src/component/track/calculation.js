import React, { useEffect } from 'react';
import './calculation.css';
import AchievementScreen from '../../images/achievements.svg';
import Medal from '../../images/medal.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Calculation() {
    useEffect(() => {
        Aos.init({ duration: 2000, disable: 'mobile' });
    }, [])
    return (
        <div id='calculation' className='calculationContainer'>
            <div data-aos="fade-right" className='calFirstBox'>
                <img src={AchievementScreen} className='calImage' alt='quit second screen' />
            </div>
            <div data-aos="fade-left" className='calSecondBox'>
                <img src={Medal} className='medalStyle' alt='medal' />
                <h4 className='smallTitle'>Money, Achievements, Health</h4>
                <h3 className='biggerTitle'>Track your success</h3>
                <p className='basicText'>
                    Your achievements are your biggest supporter in the quit smoking process. It is very easy to see these achievements in the future,  monitor the progress you have made since you quit smoking, and achieve the results. You simply download Quit Buddy and let this work be done for you. Enjoy your new life period without smoking!
                </p>
            </div>
        </div>
    )
}

export default Calculation;