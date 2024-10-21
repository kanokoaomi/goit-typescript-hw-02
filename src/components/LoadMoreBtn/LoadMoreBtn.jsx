// import styles from './LoadMoreBtn.module.css'
import classNames from "class-names"
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button onClick={onLoadMoreBtn} type='button' className={classNames('buttonLoadMore', theme)}>Load more</button>
    )
}

export default LoadMoreBtn