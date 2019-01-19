import React from "react";
import ReactDom from 'react-dom';
import "./index.less";

export default class Loading extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <div className="init-loading-wrapper">
            <div className="init-loading">
                <div className="loading-ring">
                    <div className="loading-ball-holder">
                        <div className="loading-ball1"></div>
                        <div className="loading-ball2"></div>
                        <div className="loading-ball3"></div>
                        <div className="loading-ball4"></div>
                    </div>
                </div>
            </div>
        </div>
    }
};

export function showLoading() {
    const wrapper = document.createElement('div');
    ReactDom.render(<div><Loading /></div>, wrapper);

    document.body.appendChild(wrapper);

    return wrapper;
}


export function hideLoading(wrapper) {
    wrapper && document.body.removeChild(wrapper);
}