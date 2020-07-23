import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import Login from "./Login";
import { login, setCurrentId, setUserRole } from "../actions/pageActions";
import { Switch, Route, useHistory } from "react-router";
import ErrorModal from "./ErrorModal";
import Edit from "./Edit";
import UserList from "./UserList";
import UserEdit from "./UserEdit";

interface IProps {
  isLogged: boolean;
  login: Function;
  setCurrentId: Function;
  userRole: string;
  setUserRole: Function;
}

function App({ isLogged, login, setCurrentId, userRole, setUserRole }: IProps) {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.token) {
      const userId = localStorage.id;
      setCurrentId(userId);
      const role = localStorage.role;
      setUserRole(role);
      login();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <ErrorModal />
      {isLogged && userRole !== "admin" ? (
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/edit" component={Edit} />
          <Route path="/edit/:messageId" component={Edit} />
        </Switch>
      ) : null}
      {isLogged && userRole === "admin" ? (
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/edit" component={Edit} />
          <Route path="/edit/:messageId" component={Edit} />
          <Route exact path="/userList" component={UserList} />
          <Route exact path="/userEdit" component={UserEdit} />
          <Route path="/userEdit/:userId" component={UserEdit} />
        </Switch>
      ) : null}
      {!isLogged ? (
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      ) : null}
      <Footer />
    </div>
  );
}

interface IStoreState {
  page: {
    isLogged: boolean;
    userRole: string;
  };
}
const mapStateToProps = (state: IStoreState) => {
  return {
    isLogged: state.page.isLogged,
    userRole: state.page.userRole,
  };
};
const mapDispatchToProps = {
  login,
  setCurrentId,
  setUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
