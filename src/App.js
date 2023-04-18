import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Fetch from './task2/Fetch'
import Register from "./task5/Register"

import Chart from './task4/charts/Chart'
import Login from "./task3/Login"
import { Provider } from 'react-redux'
import {store} from "./Store"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


function App() {
  const client =new QueryClient({
    
  })
  return (
    <div>
      <QueryClientProvider client={client}>
    <Router>
     
      <div className='car'>
        
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/chart">chart</Link>
      
      <Link to="/fetch">Fetch</Link>
      
      
      </div> 

      <Routes>
        
        <Route path='/chart' element={<Chart/>}/>
  
        <Route path='/' element={<Register/>}/>
        <Route path='/fetch' element={<Fetch/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
    </Router>
  </QueryClientProvider>
  </div>
  )
  
}

export default App