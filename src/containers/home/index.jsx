import React from "react";
import { connect } from "react-redux";

const Home = props => <div className="form-wrap">this is home1</div>;

// export default Home;

const mapStateToProps = store => ({
  rootInitData: store
});

export default connect(
  mapStateToProps,
  null
)(Home);
