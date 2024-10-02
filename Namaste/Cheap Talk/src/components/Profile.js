import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log("constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("MOunt " + this.props.name);
    const data = await fetch(`https://api.github.com/users/${this.props.name}`);
    const json = await data.json();
    //set the whole state to json got by github users url
    this.setState({
      userinfo: json,
    });
    // console.log(json);

    this.timer = setInterval(() => {
      console.log("Set Interval called");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child componed updated");
  }
  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componed unmounted");
  }
  render() {
    console.log("render" + this.props.name);
    // const { count, count2 } = this.state;
    return (
      <>
        <h1>Profile class component</h1>
        <img src={this.state.userinfo.avatar_url} />
        <p>Name: {this.state.userinfo.name}</p>
        <p>location: {this.state.userinfo.location}</p>
        {/* <p>{count2}</p> */}
        {/* // we do not mutate state directly. */}
      </>
    );
  }
}

export default Profile;
