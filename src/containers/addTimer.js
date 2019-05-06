import React from "react";
import { connect } from "react-redux";
import { addTimer } from "../actions/index";
import AddTimer from "../components/addTimer";

const mapDispatchToProps = dispatch => ({
  onClick: (name) => {
    dispatch(addTimer(name));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTimer);
