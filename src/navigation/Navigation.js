import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/welcome/Welcome';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import TermOfUse from '../pages/termOfUse/TermOfUse';

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/privacypolicy'>
                    <PrivacyPolicy />
                </Route>

                <Route path='/privacypolicy'>
                    <PrivacyPolicy />
                </Route>

                <Route path='/termofuse'>
                    <TermOfUse />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default Navigation;