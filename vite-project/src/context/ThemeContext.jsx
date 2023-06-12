import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light")
    const changeMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    }
    return (<ThemeContext.Provider value={{ mode, changeMode }}>
        <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>)
}