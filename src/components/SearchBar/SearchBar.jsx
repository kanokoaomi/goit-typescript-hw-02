import toast from 'react-hot-toast'
import styles from './SearchBar.module.css'
import "../../App.css"
import ThemeChoise from '../ThemeChoise/ThemeChoise'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import classNames from 'classnames'

const SearchBar = ({ onSearch }) => {

    const { theme } = useContext(ThemeContext)

    const notify = () => {
        toast('Type a search word');
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const query = form.elements.query.value

        if (query.trim() === "") {
            notify()
        } else {
            onSearch(query)
        }
        form.reset()
    }

    return (
        <header className={classNames("header", theme)}>
            <form className={styles.form} onSubmit={onFormSubmit}>
                <input
                    name='query'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={classNames("input", theme)}
                />
                <button className={classNames("button", theme)} type="submit">Search</button>
                <ThemeChoise value={theme} />
            </form>
        </header>
    )
}

export default SearchBar