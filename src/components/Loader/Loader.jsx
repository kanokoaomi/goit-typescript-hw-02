import { Grid } from 'react-loader-spinner'
import styles from './Loader.module.css'
import classNames from 'class-names'
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"

const Loader = () => {

    const { theme } = useContext(ThemeContext)

    return (
        // <div className={styles.gridWrapper}></div>
        <Grid
            visible={true}
            height="80"
            width="80"
            color={classNames("loader", theme)}
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass={styles.gridWrapper}
        />
    )
}

export default Loader