import { Grid } from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        // <div className={styles.gridWrapper}></div>
        <Grid
            visible={true}
            height="80"
            width="80"
            color="#34598B"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass={styles.gridWrapper}
        />
    )
}

export default Loader