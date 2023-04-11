import React, { useEffect, useState } from 'react'
import Axios from "axios"
import {useDispatch,useSelector} from "react-redux"

function Fetch() {
  const [response,setResponse]=useState()
  const username=useSelector((state)=>state.user.value.username)
  const generate =()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setResponse(res.data.fact)
    })
  }
  useEffect((res)=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setResponse(res.data.fact)
    })
  },[])
  return (
    <div className='fact'>
      <div>{username}</div>
      <button onClick={generate}>Generate cat fact</button>
      {response}
    </div>
  )
}

export default Fetch