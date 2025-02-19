import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme,setTheme] = useState("light");
    const[count,setCount] =useState(0);
    let data={
        theme,
        setTheme,
        count,
        setCount
    }
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;