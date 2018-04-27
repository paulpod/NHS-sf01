import React, { Component } from 'react';
import SearchPage from '../containers/search-page';
import _ from 'lodash';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import CookieBanner from 'react-cookie-banner';
import Row from 'react-bootstrap/lib/Row';
import ScrollToTop from './scroll_to_top';
import SiteFooter from './footer';
import SiteHeader from './header';
import CookiesPage from './cookies-page';
import HelpPage from './help-page';
import PrivacyPolicyPage from './privacy-policy-page';

import logo from '../logo.svg';
import '../App.css';


export default class App extends Component {
    render() {
        let cookieLink = {
            msg: 'Learn more',
            url: '#/cookies'
        };

        return (
            <HashRouter>
                <ScrollToTop>
                    <div>
                        <div id="stretch_wrapper">
                            
                            <SiteHeader />
                            <div className="container">
                                <Row className="mt-4">
                                    {this.renderRoutes()}
                                </Row>
                            </div>
                        </div>
                        <SiteFooter />
                    </div>
                </ScrollToTop>
            </HashRouter>
        );
    }

    renderRoutes() {
        return (
            <Switch>
                <Route path="/cookies" component={CookiesPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/privacy_policy" component={PrivacyPolicyPage} />
                <Route path="/index" component={SearchPage} />
                <Redirect push to="/index" />
            </Switch>
        );
    }
}
