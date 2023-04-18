import {useQuery} from '@tanstack/react-query'
import Axios from "axios"


function Fetch() {
 const {data,isLoading}=useQuery(['cat'],()=>{
    return  Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    
 })
  
 
 
  return (
    <div className='fact'>
      <div>{data?.fact}</div>
      <button >Generate cat fact</button>
      
    </div>
  )
}

export default Fetch