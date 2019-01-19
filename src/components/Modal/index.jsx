import React, { Component } from "react";
import ModalContainer from "./ModalContainer.js";
import Transition from "./transition.jsx";
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

  // 取消弹窗
  handleCancel = () => {
    const { handleCancel } = this.props;
    handleCancel && handleCancel();
    this.setState({ visible: false });
  };

  // 确认按钮
  handleOk = () => {
    const { handleOk } = this.props;
    handleOk && handleOk();
    this.setState({ visible: false });
  };

  maskClick = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { title, children } = this.props;
    return (
      <ModalContainer>
        <Transition
          visible={visible}
          transitionName="modal"
          enterActiveTimeout={200}
          enterEndTimeout={100}
          leaveActiveTimeout={100}
          leaveEndTimeout={200}
        >
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-title">{title}</div>
                <div className="modal-content">{children}</div>
                <div className="modal-operator">
                  <button
                    onClick={this.handleCancel}
                    className="modal-operator-close"
                  >
                    取消
                  </button>
                  <button
                    onClick={this.confirm}
                    className="modal-operator-confirm"
                  >
                    确认
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mask" onClick={this.maskClick}>
            1
          </div> */}
        </Transition>
      </ModalContainer>
    );
  }
}
export default Modal;
