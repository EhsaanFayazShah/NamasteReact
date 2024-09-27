import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
    };
    console.log("constructor " + this.props.name);
  }

  componentDidMount() {
    console.log("MOunt " + this.props.name);
  }
  render() {
    console.log("render" + this.props.name);
    const { count, count2 } = this.state;
    return (
      <>
        <h1>Profile class component</h1>
        <p>{this.props.name}</p>
        <p>{count}</p>
        {/* <p>{count2}</p> */}
        {/* // we do not mutate state directly. */}
      </>
    );
  }
}

export default Profile;
