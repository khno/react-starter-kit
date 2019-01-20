import React, { Component } from "react";
import ModalContainer from "./ModalContainer.js";
import "./index.less";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.setState({ visible: this.props.visible });
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible });
  }

  maskClick = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { children } = this.props;
    const divStyle = {
      zIndex: visible ? "1" : "-1"
    };
    return (
      <ModalContainer>
        <div
          className={`${visible ? "modal fade show" : "modal fade"}`}
          style={divStyle}
        >
          <div className="modal-backdrop" onClick={this.maskClick}/>
          <div className="modal-dialog">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}
export default Modal;
