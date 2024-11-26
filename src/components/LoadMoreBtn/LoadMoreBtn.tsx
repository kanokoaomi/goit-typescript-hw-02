
import classNames from "classnames"
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
import { FC } from "react";


interface LoadMoreBtnProps {
  onLoadMoreBtn: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMoreBtn }) => {
  return (
    <button onClick={onLoadMoreBtn} type='button' className={classNames('buttonLoadMore')}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;