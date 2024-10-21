import styles from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
        <p className={styles.error}>Oops, an unexpected error accured. Try again!</p>
    )
}

export default ErrorMessage