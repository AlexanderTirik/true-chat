import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import Login from "./Login";
import { login, setCurrentId } from "../actions/pageActions";
import { Switch, Route } from "react-router";
import ErrorModal from "./ErrorModal";
import Edit from "./Edit";

interface IProps {
  isLogged: boolean;
  login: Function;
  setCurrentId: Function;
}

function App({ isLogged, login, setCurrentId }: IProps) {
  useEffect(() => {
    if (localStorage.token) {
      const userId = localStorage.id;
      setCurrentId(userId);
      
      login();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <ErrorModal />
      {isLogged ? (
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/edit" component={Edit} />
          <Route path="/edit/:messageId" component={Edit} />
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
  setCurrentId,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
