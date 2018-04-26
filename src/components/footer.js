import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class SiteFooter extends Component {
    render() {
        return (
            <footer className="global-footer">
                <div className="container">
                    <div className="global-footer__inner">
                        <ul className="link-list">
                            <li><Link to="/cookies">Cookies</Link></li>
                            <li><Link to="/help">Help</Link></li>
                            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
