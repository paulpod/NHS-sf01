import React, {Component} from 'react';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import IndexLinkContainer from "react-router-bootstrap/lib/IndexLinkContainer";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Button from "react-bootstrap/lib/Button";

export default class PrivacyPolicyPage extends Component {

    render() {
        return (
            <div className="container">
                <Row className="mt-4">
                    <Col xs={12} className="large_paragraph_space mb-5">
                        <h2>Privacy Policy</h2>
                        <h3>Overview</h3>
                        <p>
                            When you use the Service Finder tool (the &#39;service&#39;), information about you will be collected.
                        </p>
                        <ul>
                            <li>
                                We collect information about how you used, how you reached and how you leave the service.
                                This is so we can improve the service for future users.
                            </li>
                            <li>
                                We ask you for personal information so we can understand who is using the service.
                                For this, we will collect your name, email address, 
                                telephone number and the organisation you represent.
                                This information along with the changes requested are used to update the Directory of Services.
                            </li>
                        </ul>
                        <p>
                            The information is collected by NHS Digital who provide the technical side of the service.
                            This policy defines how your information is used.
                        </p>
                        <h3>Information we may collect, and how we use it</h3>
                        <p>
                            In this policy, &#39;you&#39; are the user accessing the service
                            and &#39;your organisation&#39; is the organisation that you represent.
                        </p>

                        <strong>We collect the following anonymous information</strong>
                        <p className="mt-0">
                            We collect your IP address, the website you came from,
                            details of which version of web browser you used
                            and information on how you used the site (using cookies and page tagging techniques).
                        </p>
                        <p>
                            This information helps us to improve the service.
                        </p>
                        <strong>
                            The personal information you provide
                        </strong>
                        <p className="mt-0">
                            The information about your organisation’s services is used to update the Directory of Services.
                            The Directory of Services is used to direct patients to appropriate services.
                            Your personal information does not appear on the Directory of Services
                            but allows us to know who submitted the review so we can contact you if necessary.
                        </p>
                        <strong>
                            Feedback data
                        </strong>
                        <p className="mt-0">
                            You can submit a feedback form after using the service.
                            This information helps us to improve the service.
                            We may also contact you via email or telephone to request feedback,
                            discuss your submissions or resolve any problems. Your feedback is not anonymous.
                        </p>
                        <p>
                            We store your information for up to 7 years in accordance with the NHS Digital data retention policy.
                        </p>
                        <h3>
                            Keeping your data secure
                        </h3>
                        <p>
                            We do not require you to provide sensitive personal data.
                            We only collect data that is necessary for the operation of this service.
                            We encrypt your data and store it on secure servers in accordance with NHS Digital security policies.
                            Third party service providers may have access to the data, but will not contact you,
                            share your data or use it for any purpose that would be in breach of data protection legislation.
                        </p>

                        <h3>Data sharing</h3>
                        <p>
                            The data that you submit about your organisation is used to operate NHS services
                            and will be shared externally where relevant
                            (e.g. patients and other organisations providing NHS services).
                            It is also used to determine which organisations have reviewed their services
                            for the purposes of incentive payments for accurate data in the Directory of Services.
                        </p>

                        <strong>Legal powers</strong>
                        <ul>
                            <li>We may pass on your personal information if we have a legal obligation to do so.</li>
                            <li>
                                In the event of a claim against us from you as a user, we and other third parties,
                                such as solicitors acting on our behalf, may need to look at this information.
                            </li>
                        </ul>
                        <p>
                            Other than the circumstances outlined above we will not share personal information
                            with other third parties without your consent.
                        </p>

                        <h3>Further information</h3>
                        <ul>
                            <li>NHS Digital and NHS England are the Data Controllers for this service under the Data Protection Act 1998.</li>
                            <li>We will process your data in accordance with the Data Protection Act.</li>
                            <li>
                                The purpose of the privacy policy is to inform you as a user of this service
                                about what information we collect when you visit the service, how we use the information,
                                whether the information is disclosed and the ways in which we protect users&#39; privacy.
                            </li>
                            <li>We want you to feel secure when using the service. We are committed to respecting your privacy.</li>
                        </ul>

                        <h3>Your rights</h3>
                        <p>
                            You can find out what information we hold about you and express any concerns about how we process your data. 
                            Please contact us by emailing: <a href="mailto:exeter.helpdesk@nhs.net">exeter.helpdesk@nhs.net</a>.
                        </p>

                        <h3>Links to other websites</h3>
                        <p>This privacy policy only applies to this website. It does not cover external websites that we link to.</p>
                        <p>
                            If you go to another website from this one, read the privacy policy on that website
                            to find out what it does with your information.
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
