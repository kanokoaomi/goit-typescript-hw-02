import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("blue")

    const onSelect = (selectValue) => {
        setTheme(selectValue)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                onSelect,
            }}>
            {children}
        </ThemeContext.Provider>
    )
}