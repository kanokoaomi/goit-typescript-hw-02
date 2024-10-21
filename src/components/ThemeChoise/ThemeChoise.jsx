import { useContext, useId } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
// import styles from "./ThemeChoise.module.css"
import classNames from "class-names"

const ThemeChoise = () => {
    const { theme, onSelect } = useContext(ThemeContext)

    const selectId = useId()
    return (
        <select
            name="select"
            id={selectId}
            className={classNames("select", theme)}
            value={theme}
            onChange={(event) => onSelect(event.target.value)}
        >
            <option value={"blue"}>Blue theme</option>
            <option value={"dark"}>Dark theme</option>
            <option value={"light"}>Light theme</option>
        </select>
    )
}

export default ThemeChoise