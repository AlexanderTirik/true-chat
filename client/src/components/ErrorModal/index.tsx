import React from "react";
import "./styles.css";
import { hideError } from "../../actions/errorActions";
import { connect } from "react-redux";

interface IProps {
  hideError: Function;
  isShown: boolean;
  currentError: string;
}
function ErrorModal({ hideError, isShown, currentError }: IProps) {
  const handleClose = () => {
    hideError();
  };
  if (isShown) {
    return (
      <div className="errorModal">
        <div className="modalRoot">
          <div className="modalHeader">
            <div>
              <span>Error</span>
            </div>
            <button className="closeModalButton" onClick={handleClose}>
              x
            </button>
          </div>
          <div className="modalBody">
            <span>{currentError}</span>
          </div>
        </div>
      </div>
    );
  } else return null;
}

interface IStoreState {
  error: {
    isShown: boolean;
    currentError: string;
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    isShown: state.error.isShown,
    currentError: state.error.currentError,
  };
};
const mapDispatchToProps = {
  hideError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
