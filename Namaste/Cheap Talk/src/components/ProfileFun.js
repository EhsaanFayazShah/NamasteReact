import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(1);
  // const [count2] = useState(33);
  return (
    <>
      <h1>Proile Function</h1>
      <p>{props.name}</p>
      <p>{count}</p>
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
