import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import main from "./styles/main.css";
import container from "./styles/container.css";
import search from "./styles/search.css";
import gallery from "./styles/gallery.css";
import save from "./styles/save.css";
//Components
import GalleryContainer from "./components/gallery/GalleryContainer";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Container} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
