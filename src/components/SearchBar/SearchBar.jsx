import toast from 'react-hot-toast';
import styles from './SearchBar.module.css'

const notify = () => toast('Type a search word');

const SearchBar = () => {
    return (
        <header className={styles.header}>
            <form>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={styles.input}
                />
                <button className={styles.button} type="submit" onSubmit={notify}>Search</button>
            </form>
        </header>
    )
}

export default SearchBar