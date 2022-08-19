import React, { useEffect } from 'react';
import Navbar from '../../component/navigation/navbar';
import SlideImage from '../../component/slideImage/slideImage';
import Calculation from '../../component/track/calculation';
import Motivation from '../../component/motivation/motivation';
import YesYouCan from '../../component/yesYouCan/yesYouCan';
import Download from '../../component/download/download';
import Footer from '../../component/footer/Footer';

function Home() {
    useEffect(() => {
        <Navbar />
    }, [])
    return (
        <div>
            <div className='header-wrapper'>
                <Navbar />
                <SlideImage />
            </div>
            <Calculation />
            <Motivation />
            <YesYouCan />
            <Download />
            <Footer />
        </div >
    )
}

export default Home