import { createContext, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import usePersistedState from "../../Hooks/usePersistedState";
import { dark } from "../../Styles/theme/dark";
import { light } from "../../Styles/theme/light";

interface Props {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

export const GetThemeContext = createContext({} as Props);

export const GetThemeProvider = ({children}:{children: ReactNode}) => {

    const [theme, setTheme] = usePersistedState('theme', light);
    const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

    return <GetThemeContext.Provider value={{ theme, toggleTheme }}>{children}</GetThemeContext.Provider>
}