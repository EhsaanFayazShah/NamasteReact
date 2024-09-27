import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileFun from "./ProfileFun";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    //best place to make api call.
    console.log("Parent mount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>This is About us Page </h1>
        <h1>Welcome</h1>
        <Profile name={"Child 1"} xyz={"meena"} />
        <Profile name={"Child 2"} xyz={"meena"} />
      </>
    );
  }
}
export default About;
