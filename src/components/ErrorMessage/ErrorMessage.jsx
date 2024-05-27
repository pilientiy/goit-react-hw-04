import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.message}>Unstable connection, please try again</p>;
};

export default ErrorMessage;
