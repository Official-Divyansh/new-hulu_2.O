import {data} from './utils/data'
import Nav from '../styles/Navbar.module.css'
import Home from '../component/Home'
import { useState } from 'react'


export default function Navbar() {
    const [request, setRequest] = useState('')
 
    
  return (
      <>
      <ul className={Nav.ul}>   
    {
        data.map((data)=>{
            return (
               <h1 onClick={()=> setRequest(data.title)}>
                   {data.title}

               </h1>
                )
            })
        }
      </ul>
      <Home request={request} />
        </>
  )
}
