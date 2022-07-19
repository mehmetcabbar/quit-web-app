import React from 'react';
import './footer.css';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerBoxWrapper'>
                <div className='footerLeftSide'>
                    <div className='footerAbout'>
                        <h4 className='footerTitle'>Quit Buddy</h4>
                        <p className='footerAboutText'>Senectus aliquet consectetur at condimentum a nam leo sociosqu cum a adipiscing in enim leo adipiscing donec a luctus per vestibulum a pretium posuere a. Adipiscing fusce vestibulum adipiscing neque magna ridiculus volutpat torquent pulvinar faucibus vestibulum urna ad interdum metus a.  Varius dui accumsan scelerisque posuere magna fermentum hendrerit .</p>
                        <div className='footerDownloadLink'>
                            <img className='footerGoogle' src={GoogleLink} alt='footer google link' />
                            <img src={AppStoreLink} alt='footer app store link' />
                        </div>
                    </div>
                    <div className='footerContact'>
                        <h4 className='footerContactTitle'>Contact Us</h4>
                        <p className='footerContactText'>
                            We have a team that is willing to communicate and help you with
                            any question you may have. Please contact us.
                        </p>
                        <a href='/#' className='footerContactLink'>Click here for contact</a>
                    </div>
                </div>
                <div className='footerRightSide'>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Services</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Counter</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Motivation</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Health</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Achievements</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Menu</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Home</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Why Us?</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Legal</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Term of Use</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#' className='footerServicesLink'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footerSignature'>
                &copy; 2022. All rights reserved.
            </div>

        </div>
    )
}

export default Footer