import React, { useContext } from 'react'
import { ThemeContext } from './component/ThemeContext'

const App = () => {

  const {theme,setTheme} =useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h1 className='text-green-500 font-bold text-[30px] '>Hello word</h1>
      <button onClick={()=>{
        setTheme(theme == "light"?"dark":"light")
      }}>Change Theme</button>
    </div>
  )
}

export default App
