import { Blocks } from "react-loader-spinner";

const Loader = () => {
  return (
    <Blocks
      height="80"
      width="80"
      color="#4CAF50"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={true}
    />
  );
};

export default Loader;
