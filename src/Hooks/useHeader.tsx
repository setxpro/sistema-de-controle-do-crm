import { useContext } from "react"
import { HeaderContext } from "../Contexts/Header/HeaderContext"

export const useHeader = () => {
    const header = useContext(HeaderContext);
    return header;
}