import { useEffect, useState } from "react";

const Profile = (props) => {
  // const [count, setCount] = useState(1);
  // const [count2] = useState(33);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set Interval called");
    }, 1000);
    console.log("useeffect ");

    return () => {
      console.log("useeffect return ");
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>Profile Function</h1>
      <p>{props.name}</p>
      {/* <p>{count}</p> */}
      <button
        onClick={() => {
          setCount(20);
        }}
      >
        Press
      </button>
    </>
  );
};
export default Profile;
