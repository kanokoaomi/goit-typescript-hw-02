import toast from 'react-hot-toast';
import styles from './SearchBar.module.css'

// const handleSubmit = ({ searchTerm }) => {
// }

const SearchBar = ({ onSearch }) => {
    const notify = () => {
        toast('Type a search word');
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const query = form.elements.query.value

        if (query === "") {
            notify()
        } else {
            onSearch(query)
        }
        form.reset()
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     const form = event.currentTarget
    //     const input = form.elements.input.value
    //     console.log(input)
    //     if (input === "") {
    //         toast('Type a search word');
    //     }

    //     const inputValue = {
    //         input,
    //     }

    //     onFormSubmit(inputValue)
    // };


    return (
        <header className={styles.header}>
            <form onSubmit={onFormSubmit}>
                <input
                    name='query'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={styles.input}
                />
                <button className={styles.button} type="submit" onClick={notify}>Search</button>
            </form>
        </header>
    )
}

export default SearchBar