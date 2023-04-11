import React,{useState} from 'react'
import {login,logout} from "../Store"
import {useDispatch,useSelector} from "react-redux"
function Login() {
  const[newUserName,setNewUserName]=useState('')
  const dispatch=useDispatch()
  const username=useSelector((state)=>state.user.value.username)
  return (
    <div className='one'>
      <div className='two'>
        <button onClick={()=>{dispatch(logout( ))}}>logOut</button>
        </div>
      <div className='name'>UserName:{username}</div>
      <div className='takeInpute'>
        <input type="text" placeholder='Enter the username' onChange={
          (e)=>{setNewUserName(e.target.value)}
        } />
        </div>
        <button onClick={()=>{dispatch(login({username:newUserName}))}}>logIn</button>
        
    </div>
  )
}

export default Login