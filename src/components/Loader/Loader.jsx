import { PacmanLoader } from "react-spinners";
const Loader = () => {
  return (
    <div>
      <PacmanLoader
        cssOverride={{ margin: "10px auto 0 auto" }}
        color="#3646aa"
        size={50}
      />
    </div>
  );
};

export default Loader;
