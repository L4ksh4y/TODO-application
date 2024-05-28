import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodos } from './components/CreateTodos'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       hi there 
       <CreateTodos>

       </CreateTodos>
       <Todos>
        
       </Todos>
      </div>
    
    </>
  )
}

export default App
