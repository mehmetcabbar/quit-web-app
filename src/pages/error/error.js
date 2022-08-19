import './error.css';
import React from 'react';
import Navbar from '../../component/navigation/navbar';
import Footer from '../../component/footer/Footer';
import ErrorImage from '../../images/error.svg'

function Error() {
    return (
        <div>
            <Navbar />
            <div className='errorBox'>
                <img src={ErrorImage} className='errorImage' alt='Error' />
            </div>
            <Footer />
        </div>
    )
}

export default Error;