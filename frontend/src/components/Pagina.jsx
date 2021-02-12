import React from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

class Pagina extends React.Component {
  render() {
    return(
      <Row className="no-gutters justify-content-center mt-5">
        <Col md={12} className="text-center my-5">
          <h1>Esta é a Página teste</h1>
        </Col>
      </Row>
    )
  }
}

export default withRouter(Pagina);