import React, { useEffect, useState } from "react";
import "./styles.css";
import { Formik, Field, Form } from "formik";
import { connect } from "react-redux";
import { hideLoading } from "../../actions/pageActions";
import { showError } from "../../actions/errorActions";
import { editUser } from "../../actions/userActions";
import UserService from "../../services/userService";
import Spinner from "../Spinner";
import { useHistory } from "react-router-dom";
import { initStorage } from "../../actions/userActions";

interface IProps {
  match: {
    params: {
      userId?: string;
    };
  };
  isLoading: boolean;
  hideLoading: Function;
  showError: Function;
  editUser: Function;
  initStorage: Function;
}
function UserEdit({
  match,
  isLoading,
  hideLoading,
  showError,
  editUser,
  initStorage,
}: IProps) {
  const [initValues, setInitValues] = useState({
    role: "",
    user: "",
    password: "",
    avatar: "",
  });
  const history = useHistory();
  useEffect(() => {
    const userId = match.params.userId;

    if (userId) {
      const response = UserService.getUser(userId)
        .then((response) => {
          if (response.error) throw new Error(response.message!);
          console.log(userId);
          setInitValues({
            role: response.data!.role,
            user: response.data!.user,
            password: response.data!.password,
            avatar: response.data!.avatar,
          });
        })
        .catch((error) => {
          showError(error.message);
        })
        .finally(() => {
          hideLoading();
        });
    }
  }, [match.params.userId]);
  if (isLoading) return <Spinner />;

  return (
    <div className="userEdit">
      <Formik
        enableReinitialize={true}
        initialValues={initValues}
        onSubmit={(values) => {
          if (match.params.userId) editUser(match.params.userId, values);
          history.push("/userList");
          initStorage();
        }}
      >
        <Form className="userEditForm">
          <label htmlFor="user">Username</label>
          <Field
            className="userEditInput"
            type="text"
            name="user"
            placeholder="Username"
          />
          <label htmlFor="avatar">Avatar</label>
          <Field
            className="userEditInput"
            type="text"
            name="avatar"
            placeholder="Avatar"
          />
          <label htmlFor="username">Role</label>

          <Field
            className="userEditInput"
            type="text"
            name="role"
            placeholder="role"
          />

          <label htmlFor="password">Password</label>
          <Field
            className="userEditInput"
            type="text"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="userEditSubmit">
            Edit user
          </button>
        </Form>
      </Formik>
    </div>
  );
}
interface IStoreState {
  page: {
    isLoading: boolean;
  };
}
const mapStateToProps = (state: IStoreState) => {
  return {
    isLoading: state.page.isLoading,
  };
};
const mapDispatchToProps = {
  hideLoading,
  showError,
  editUser,
  initStorage,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
