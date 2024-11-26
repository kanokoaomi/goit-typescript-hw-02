import toast from 'react-hot-toast'
import styles from './SearchBar.module.css'
import "../../App.css"
// import ThemeChoise from '../ThemeChoise/ThemeChoise'
// import { useContext } from 'react'
// import { ThemeContext } from '../Context/ThemeContextProvider'
import classNames from 'classnames'
import { FormEvent } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {

    // const { theme } = useContext(ThemeContext)

    const notify = () => {
        toast('Type a search word');
    }

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement
        const query = (form.elements.namedItem('query') as HTMLInputElement).value

        if (query.trim() === "") {
            notify()
        } else {
            onSearch(query)
        }
        form.reset()
    }

    return (
        <header className={classNames("header")}>
            <form className={styles.form} onSubmit={onFormSubmit}>
                <input
                    name='query'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={classNames("input")}
                />
                <button className={classNames("button")} type="submit">Search</button>
                {/* <ThemeChoise value={theme} /> */}
            </form>
        </header>
    )
}

export default SearchBar
