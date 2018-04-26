import React, { Component } from 'react';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';

export default class CookiesPage extends Component {
    render() {
        return (
            <div className="container">
                <Row className="mt-4">
                    <Col xs={12} className="large_paragraph_space">
                        <h2>Cookies Policy</h2>

                        <p>Cookies are small files saved to your device by websites.
                            They can be used to improve your experience online
                            and are often required for websites to work correctly.</p>
                        <p>This website uses cookies to show that you are an authorised user
                            as you go through the service update process and to analyse how the website is being used.
                            Please do not disable cookies, as this will prevent the website from working correctly.</p>

                        <p>
                            {/* eslint-disable react/jsx-no-target-blank */}
                            For more information about how to remove cookies from your device after the Service Finder review,
                            or how to block individual cookies from being received,
                            please see the instructions and guidance
                            at <a target='_blank' href="http://www.aboutcookies.org/">www.aboutcookies.org</a>.
                            {/* eslint-enable react/jsx-no-target-blank */}
                        </p>

                        <IndexLinkContainer to="/index">
                            <Button bsSize="large" bsStyle="success">
                                <Glyphicon glyph="chevron-left" /> Return to home page
                            </Button>
                        </IndexLinkContainer>
                    </Col>
                </Row>
            </div>
        );
    }
}
