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
    // https://api.github.com/users/EhsaanFayazShah
    console.log("Parent mount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>This is About us Page </h1>
        <h1>Welcome</h1>
        <ProfileFun name={"EhsaanFayazShah"} />
      </>
    );
  }
}
export default About;
