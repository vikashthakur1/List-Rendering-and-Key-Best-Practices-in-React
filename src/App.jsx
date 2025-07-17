import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const items = ["Apple","Mango","Banana","lichi","Orange"]
  return (
    <section>
      <h>Fruits</h>
      <ul>
        {
          items.map((item,index) =>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      
      
    </section>
  )
}

export default App
