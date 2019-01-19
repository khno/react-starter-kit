import React from "react";
import classnames from "classnames";

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      classes: null
    };
  }

  static defaultProps = {
    animate: true,
    visible: false,
    transitionName: "",
    appearTimeout: 0,
    appearActiveTimeout: 0,
    appearEndTimeout: 0,
    enterTimeout: 0,
    enterActiveTimeout: 0,
    enterEndTimeout: 0,
    leaveTimeout: 0,
    leaveEndTimeout: 0,
    leaveActiveTimeout: 0
  };

  componentWillMount() {
    const { transitionName, animate, visible } = this.props;
    if (!animate) {
      this.setState({ visible });
      return;
    }
    this.appearAnimate(this.props, transitionName);
  }

  componentWillReceiveProps(props) {
    const { transitionName, animate, visible } = props;
    if (!animate) {
      this.setState({ visible });
      return;
    }
    if (!props.visible) {
      this.leaveAnimate(props, transitionName);
    } else {
      this.enterAnimate(props, transitionName);
    }
  }

  appearAnimate = (props, transitionName) => {
    const {
      visible,
      appearTimeout,
      appearActiveTimeout,
      appearEndTimeout
    } = props;
    const { initClasses, activeClasses, endClasses } = this.getClasses(
      "appear",
      transitionName
    );
    this.setState({ visible, classes: initClasses });
    setTimeout(_ => {
      this.setState({ classes: activeClasses });
    }, appearTimeout);
    setTimeout(_ => {
      this.setState({ classes: endClasses });
    }, appearActiveTimeout + appearTimeout);
    setTimeout(_ => {
      this.setState({ classes: "" });
    }, appearEndTimeout + appearActiveTimeout + appearTimeout);
  };

  enterAnimate = (props, transitionName) => {
    const {
      visible,
      enterTimeout,
      enterActiveTimeout,
      enterEndTimeout
    } = props;
    const { initClasses, activeClasses, endClasses } = this.getClasses(
      "enter",
      transitionName
    );
    this.setState({ visible, classes: initClasses });
    const enterTimer = setTimeout(_ => {
      this.setState({ classes: activeClasses });
      clearTimeout(enterTimer);
    }, enterTimeout);
    const enterActiveTimer = setTimeout(_ => {
      this.setState({ classes: endClasses });
      clearTimeout(enterActiveTimer);
    }, enterActiveTimeout + enterTimeout);
    const enterEndTimer = setTimeout(_ => {
      this.setState({ classes: "" });
      clearTimeout(enterEndTimer);
    }, enterEndTimeout + enterActiveTimeout + enterTimeout);
  };

  leaveAnimate = (props, transitionName) => {
    const {
      visible,
      leaveTimeout,
      leaveActiveTimeout,
      leaveEndTimeout
    } = props;
    const { initClasses, activeClasses, endClasses } = this.getClasses(
      "leave",
      transitionName
    );
    this.setState({ classes: initClasses });
    const leaveTimer = setTimeout(_ => {
      this.setState({ classes: activeClasses });
      clearTimeout(leaveTimer);
    }, leaveTimeout);
    const leaveActiveTimer = setTimeout(_ => {
      this.setState({ classes: endClasses });
      clearTimeout(leaveActiveTimer);
    }, leaveActiveTimeout + leaveTimeout);
    const leaveEndTimer = setTimeout(_ => {
      this.setState({ visible, classes: "" });
      clearTimeout(leaveEndTimer);
    }, leaveEndTimeout + leaveActiveTimeout + leaveTimeout);
  };

  getClasses = (type, transitionName) => {
    const initClasses = classnames({
      [`${transitionName}-appear`]: type === "appear",
      [`${transitionName}-enter`]: type === "enter",
      [`${transitionName}-leave`]: type === "leave"
    });
    const activeClasses = classnames({
      [`${transitionName}-appear-active`]: type === "appear",
      [`${transitionName}-enter-active`]: type === "enter",
      [`${transitionName}-leave-active`]: type === "leave"
    });
    const endClasses = classnames({
      [`${transitionName}-appear-end`]: type === "appear",
      [`${transitionName}-enter-end`]: type === "enter",
      [`${transitionName}-leave-end`]: type === "leave"
    });
    return { initClasses, activeClasses, endClasses };
  };

  cloneChildren = () => {
    const { classes } = this.state;
    const children = this.props.children;
    const className = children.props.className;
    return React.cloneElement(children, {
      className: `${className} ${classes}`
    });
  };

  render() {
    const { visible } = this.state;
    return visible && this.cloneChildren();
  }
}

export default Transition;
