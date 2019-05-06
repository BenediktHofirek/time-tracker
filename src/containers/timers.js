import React from "react";
import { connect } from "react-redux";
import { handlePause, handleResume, handleFinish, handleCancel } from "../actions/index";
import Timers from "../components/timers";

const mapStateToProps = state => ({
  timers: state.timers
});

const mapDispatchToProps = dispatch => ({
  handlePause: name => {
    dispatch(handlePause(name));
  },
  handleResume: name => {
    dispatch(handleResume(name));
  },
  handleFinish: name => {
    dispatch(handleFinish(name));
  },
  handleCancel: name => {
    dispatch(handleCancel(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timers);
