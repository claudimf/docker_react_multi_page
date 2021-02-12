import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Header, Home, Pagina } from "./components"
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render(){
    return(
      <Container fluid className="p-0">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/pagina" exact component={() => <Pagina />} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
