import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={css.container}>
      <button className={css.button} type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
