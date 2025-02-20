import React, { useState } from 'react'

const ColorPicker = () => {
    const[color,setColor]=useState("");
function handlecolorChange(e){
setColor(e.target.value);
}
  return (
    <div className='color-picker-container'>
        <h1 className='color-display font-bold text-[30px]' style={{backgroundColor:color}}>Color Picker</h1>
      <h1 >Color : {color}</h1>
      <label>Set Color</label>
      <input type='color' value={color} onChange={handlecolorChange}/>
    </div>
  )
}

export default ColorPicker
