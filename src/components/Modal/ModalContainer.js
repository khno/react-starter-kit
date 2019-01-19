import { Component } from "react";
import { createPortal } from "react-dom";

export default class ModalContainer extends Component {
    constructor(props) {
        super(props);
        const doc = window.document;
        this.node = doc.createElement("div");
        doc.body.appendChild(this.node);

        window.document.body.appendChild(window.document.createElement("div"));
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

    render() {
        return createPortal(this.props.children, this.node);
    }
}
