import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getMiliseconds from "../services/getMiliseconds";
import getTimeWithoutMiliseconds from "../services/getTimeWithoutMiliseconds";

class Timer extends Component {
  state = {};

  componentDidMount() {
    this.setState({ actualTime: Date.now() });
    this.props.active && this.updateTimer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.actualTime !== nextState.actualTime ||
      nextProps.startTime !== this.props.startTime
    );
  }

  /*pojistka proti bugum v SCU*/
  componentDidUpdate() {
    this.props.active && !this.state.timeout && this.updateTimer();
  }

  componentWillUnmount(){
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
      this.setState({});
    }
  }

  updateTimer() {
    const { actualTime } = this.state;
    const { startTime } = this.props;

    /*jako timeout se nastavi pocet milisekund zbyvajicich do dalsi cele sekundy + deset milisekund jako jisteni*/

    this.setState({
      timeout: setTimeout(
        () => this.setState({ actualTime: Date.now(), timeout: "" }),
        1000 - getMiliseconds(actualTime - startTime)
      )
    });
  }

  render() {
    const {
      name,
      index,
      duration,
      active,
      startTime,
      handlePause,
      handleResume,
      handleFinish,
      handleCancel
    } = this.props;

    const { actualTime } = this.state;

    /*zobrazuje duration plus actualTime orezany o milisekundy, 
    aby se pripadne nepreskakovalo o vterinu nahoru*/
    const time = new Date(
      duration +
        ((active && getTimeWithoutMiliseconds(actualTime - startTime)) || 0)
    );
     console.log("actualTime", index, active, getTimeWithoutMiliseconds(actualTime - startTime), actualTime - startTime, actualTime, time);

    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>
          {time.getUTCHours() +
            ":" +
            time.getMinutes() +
            ":" +
            time.getSeconds()}
        </td>
        <td>
          <button
            className="btn"
            onClick={() => {
              handleResume(name);
              this.setState({ actualTime: Date.now() });
            }}
            disabled={active}
          >
            <FontAwesomeIcon icon="play" />
          </button>
        </td>
        <td>
          <button
            className="btn"
            onClick={() => {
              handlePause(name);
            }}
            disabled={!active}
          >
            <FontAwesomeIcon icon="pause" />
          </button>
        </td>
        <td>
          <button
            className="btn"
            onClick={() => {
              handleFinish(name);
            }}
          >
            <FontAwesomeIcon icon="save" />
          </button>
        </td>
        <td>
          <button
            className="btn"
            onClick={() => {
              handleCancel(name);
            }}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </td>
      </tr>
    );
  }
}

export default Timer;
