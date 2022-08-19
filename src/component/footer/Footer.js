import React from 'react';
import './footer.css';
import GoogleLink from '../../images/google.svg';
import AppStoreLink from '../../images/appstore.svg';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className='footerContainer'>
            <div className='footerBoxWrapper'>
                <div className='footerLeftSide'>
                    <div className='footerAbout'>
                        <h4 className='footerTitle'>Quit Buddy</h4>
                        <p className='footerAboutText'>
                            It's fascinating to see people lives change. Technology can help anyone who wants to change their future and get rid of some of their habits. We want to help anyone who wants to quit smoking via Quit Buddy.
                        </p>
                        <div className='footerDownloadLink'>
                            <a href='https://play.google.com/store/apps/details?id=com.quitbuddyforme' target='blank'>
                                <img className='footerGoogle' src={GoogleLink} alt='footer google link' />
                            </a>
                            <img src={AppStoreLink} alt='footer app store link' />
                        </div>
                    </div>
                    <div className='footerContact'>
                        <h4 className='footerContactTitle'>Contact Us</h4>
                        <p className='footerContactText'>
                            We have a team that is willing to communicate and help you with
                            any question you may have. Please contact us.
                        </p>
                        <a href='mailto:support@quitbuddy.app?subject=Support request' className='footerContactLink'>Click here for contact</a>
                    </div>
                </div>
                <div className='footerRightSide'>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Services</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <a href='/#calculation' className='footerServicesLink'>Counter</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#motivation' className='footerServicesLink'>Motivation</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#calculation' className='footerServicesLink'>Health</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href={'/#calculation'} className='footerServicesLink'>Achievements</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Menu</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <a href='/' className='footerServicesLink'>Home</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='/#calculation' className='footerServicesLink'>Why Us?</a>
                            </li>
                            <li className='footerServicesLi'>
                                <a href='mailto:support@quitbuddy.app?subject=About contact' className='footerServicesLink'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footerfirstNavigation'>
                        <h6 className='footerServices'>Legal</h6>
                        <ul className='footerServicesZone'>
                            <li className='footerServicesLi'>
                                <Link to='/termofuse' className='footerServicesLink'>Term of Use</Link>
                            </li>
                            <li className='footerServicesLi'>
                                <Link to='/privacypolicy' className='footerServicesLink'>Privacy Policy</Link>
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