import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Home } from "./components"
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render(){
    return(
      <Container fluid className="p-0">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;