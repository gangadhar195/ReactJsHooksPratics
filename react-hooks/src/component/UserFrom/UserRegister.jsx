import React, { useState } from 'react'

const UserRegister = () => {

    const[user,setUser] =useState({
        name:"",
        email:"",
        password:"",
        address:""
    }) 

    function handleChange(e){
        const {name,value} = e.target;
        setUser((prev)=>{
            return {...prev,[name]:value};
        })
        console.log(user);
    }
   
    
  return (
    <div className=' justify-center items-center'>
       
      <from className=' h-[300px] w-[200px] flex flex-col justify-center  rounded-2xl border-8 p-4'>
      <h1 className='font-bold '>Register From </h1>
        <label >Name :</label>
        <input type='text' name='name' placeholder='Name' className='border-2 pl-2'onChange={handleChange}/>
        <label >Email :</label>
        <input type='email' name='email' placeholder='Email'className='border-2 pl-2'onChange={handleChange}/> 
        <label >Password :</label>
        <input type='password' name='password' placeholder='password'className='border-2 pl-2'onChange={handleChange}/>
        <label >Address :</label>
      <textarea name='address' placeholder='Address'className='border-2'onChange={handleChange}></textarea>
        <button type='submit' onClick={handleChange}>Submit</button>
      </from>
    </div>
  )
}

export default UserRegister
