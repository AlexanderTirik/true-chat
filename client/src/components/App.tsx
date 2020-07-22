import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../actions/pageActions";
import { Switch, Route } from "react-router";

interface IProps {
  isLogged: boolean;
  login: Function;
}

function App({ isLogged, login }: IProps) {
  useEffect(() => {
    if (localStorage.token) login();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLogged ? (
        <Switch>
          <Route exact path="/" component={Chat} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      )}
      <Footer />
    </div>
  );
}

interface IStoreState {
  page: {
    isLogged: boolean;
  };
}
const mapStateToProps = (state: IStoreState) => {
  return {
    isLogged: state.page.isLogged,
  };
};
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
