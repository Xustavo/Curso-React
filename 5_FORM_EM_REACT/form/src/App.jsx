import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Seção 4 - Forms em react</h1>
      <h2>Forms</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com"}}/>
    </div>
  )
}

export default App
