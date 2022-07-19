import React from 'react';
import './download.css';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';


function Download() {
    return (
        <div className='downloadContainer'>
            <div className='downloadWrapper'>
                <h3 className='downloadtitle'>Download Quit Buddy</h3>
                <h6 className='downloadSubTitle'>Take a step towards your healthy future now.</h6>
                <p className='downloadText'>
                    Senectus aliquet consectetur at condimentum a nam leo sociosqu cum
                    a adipiscing in enim leo adipiscing donec a luctus per vestibulum a pretium
                    posuere a. Adipiscing fusce vestibulum adipiscing neque magna ridiculus
                    volutpat torquent pulvinar faucibus vestibulum urna ad interdum metus a.
                    Varius dui accumsan scelerisque posuere magna fermentum hendrerit .
                </p>
                <div className='lasDownloadBox'>
                    <a href='/#' className='linkPadding'>
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