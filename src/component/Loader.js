import {PacmanLoader} from "react-spinners";

const styles  = {
  margin: "7rem auto",
};
function Loader({loaderStyle}) {

  return (
    <div className="sweet-loading">
      <PacmanLoader
        color='#60d9fb'
        cssOverride={loaderStyle ? loaderStyle : styles}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1.3}
      />
    </div>
  );
}

export default Loader;