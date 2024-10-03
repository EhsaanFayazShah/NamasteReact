import { useRouteError } from "react-router-dom";
//hook always starts with "use".
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>Oops Error</h1>
      <h1>{err.status + "!!"}</h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};

export default Error;
