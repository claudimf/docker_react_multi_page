import React from 'react';
import { withRouter } from "react-router-dom";
import { Row } from 'react-bootstrap';

function Home() {
    return(
        <Row className="no-gutters justify-content-center px-5 m-5">
          <h2>Esta é a Homepage</h2>
        </Row>
    );
}

export default withRouter(Home);