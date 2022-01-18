import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BackgroundContainer } from "./StyledCompnents";
import Home from "./Components/Home";
import Header from "./Components/Header";
import UserDetails from "./Components/ChatPage";
class App extends Component {
  render() {
    return (
      <BackgroundContainer>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contacts/:id" component={UserDetails} />
          </Switch>
        </BrowserRouter>
      </BackgroundContainer>
    );
  }
}
export default App;
