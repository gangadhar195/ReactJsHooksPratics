import React, { useState } from 'react'

const ColorPicker = () => {
    const[color,setColor]=useState("black");
function handlecolorChange(e){
setColor(e.target.value);
}
  return (
    <div className='color-picker-container'>
        <h1 className='color-display font-bold text-[30px]    ' >Color Picker</h1>
      <h1 className='h-[300px] w-[300px] justify-center items-center 'style={{backgroundColor:color}}>Color : {color}</h1>
      <label className='font-bold'>Set Color</label>
      <input type='color' value={color} onChange={handlecolorChange} className='mt-4 h-[50px] w-[90px]'/>
    </div>
  )
}

export default ColorPicker
