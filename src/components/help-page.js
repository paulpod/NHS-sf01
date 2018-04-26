import React, { Component } from 'react';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';

export default class HelpPage extends Component {
    render() {
        return (
            <div className="container">
                <Row className="mt-4">
                    <Col xs={12} className="large_paragraph_space">
                        <h2>Help</h2>
                        <h4>If you are having trouble using the Service Finder tool:</h4>
                        <p>
                            {/* eslint-disable react/jsx-no-target-blank */}
                            Firstly see the guidance
                            document <a target="_blank" href="https://digital.nhs.uk/directory-of-services/profile-updater-guidance"> here</a>.
                            {/* eslint-enable react/jsx-no-target-blank */}
                        </p>
                        <p>
                            If you are still encountering difficulties, contact the helpdesk:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:exeter.helpdesk@nhs.net">exeter.helpdesk@nhs.net</a></li>
                            <li>Telephone: 0300 303 4034</li>
                        </ul>
                        <p>
                            Helpdesk support is available Monday-Friday, 8am-5pm, excluding
                            bank holidays.
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
