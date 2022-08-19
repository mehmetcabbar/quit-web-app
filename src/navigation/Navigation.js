import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/welcome/Welcome';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import TermOfUse from '../pages/termOfUse/TermOfUse';
import Error from '../pages/error/error';

const Navigation = () => {
    return (
        <Router forceRefresh={true}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/privacypolicy' component={PrivacyPolicy} />
                <Route path='/termofuse' component={TermOfUse} />
                <Route path='/404' component={Error} />
                <Redirect from='*' to='/404' />
            </Switch>
        </Router>
    )
}

export default Navigation;