import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import withRouter from "react-router-dom/withRouter";

export class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Brand>Service Finder v2</Navbar.Brand>
            </Navbar>
        );
    }
}

export default withRouter(Header);
