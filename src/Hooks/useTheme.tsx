import { useContext } from "react"
import { GetThemeContext } from "../Contexts/Theme/GetThemeContext"

export const useTheme = () => {
    const theme = useContext(GetThemeContext);
    return theme;
}