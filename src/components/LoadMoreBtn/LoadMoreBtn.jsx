import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ submit }) => {
  return (
    <div className={style.btnContainer}>
      <button className={style.LoadMoreBtn} onClick={submit}>
        Daha Fazla Yükle
      </button>
    </div>
  );
};

export default LoadMoreBtn;
