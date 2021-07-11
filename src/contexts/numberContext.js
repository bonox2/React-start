import { createContext, useState } from "react";


export const NumberContext = createContext()

export default function NumberProvider(props) {
    const [number, setNumber] = useState(101)
    return <NumberContext.Provider value={[number, setNumber]}>{props.children}</NumberContext.Provider>
}