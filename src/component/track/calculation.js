import React, { useEffect } from 'react';
import './calculation.css';
import ScreenShot from '../../images/screen.svg';
import Medal from '../../images/medal.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Calculation() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id='#calculation' className='calculationContainer'>
            <div data-aos="fade-right" className='calFirstBox'>
                <img src={ScreenShot} className='calImage' alt='quit second screen' />
            </div>
            <div className='calSecondBox'>
                <img src={Medal} className='medalStyle' alt='medal' />
                <h4 className='smallTitle'>Achievements, Health Improvements</h4>
                <h3 className='biggerTitle'>Track your success</h3>
                <p className='basicText'>
                    Senectus aliquet consectetur at condimentum a nam leo sociosqu cum a adipiscing in enim leo adipiscing donec a luctus per vestibulum a pretium posuere a. Adipiscing fusce vestibulum adipiscing neque magna ridiculus volutpat torquent pulvinar faucibus vestibulum urna ad interdum metus a.  Varius dui accumsan scelerisque posuere magna fermentum hendrerit .
                </p>
            </div>
        </div>
    )
}

export default Calculation;