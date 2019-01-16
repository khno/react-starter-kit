import React from "react";
import { connect } from "react-redux";
export class Home extends React.Component {

  render() {
    return (
      <div className="home">
        this is about
      </div>
    );
  }
}

const mapStateToProps = store => ({
  rootInitData: store
});

export default connect(
  mapStateToProps,
  null
)(Home);
