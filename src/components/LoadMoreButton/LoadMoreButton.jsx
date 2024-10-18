import styles from './LoadMoreButton.module.css'

const LoadMoreButton = ({ onLoadMoreBtn }) => {
    return (
        <button onClick={onLoadMoreBtn} type='button' className={styles.button}>Load more</button>
    )
}

export default LoadMoreButton