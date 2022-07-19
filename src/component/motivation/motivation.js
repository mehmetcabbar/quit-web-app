import React, { useEffect } from 'react';
import './motivation.css';
import ScreenShot from '../../images/screen.svg';
import MotivationImages from '../../images/motivation.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Motivation() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id='#motivation' className='motivationContainer'>
            <div className='motFirstBox'>
                <img src={MotivationImages} className='motTextBox' alt='motivation images' />
                <h4 className='smallTitle'>Follow your decision</h4>
                <h3 className='biggerTitle'>Explore your motivations</h3>
                <p className='basicText'>
                    Senectus aliquet consectetur at condimentum a nam leo sociosqu cum a adipiscing in enim leo adipiscing donec a luctus per vestibulum a pretium posuere a. Adipiscing fusce vestibulum adipiscing neque magna ridiculus volutpat torquent pulvinar faucibus vestibulum urna ad interdum metus a.  Varius dui accumsan scelerisque posuere magna fermentum hendrerit .
                </p>
            </div>
            <div data-aos='fade-left' className='motSecondBox'>
                <img src={ScreenShot} className='calImage' alt='quit second screen' />
            </div>
        </div>
    )
}

export default Motivation;