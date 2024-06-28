import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
import ChallengeCSS from './components/challengeCSS'

function App() {
  const n = 15
  const [name] = useState("Gustavo")
  const redTitle = false

  return (
    <div>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do app.jsx</p>
      {/* InLine CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Gustavo" ? ({color: "blue", backgroundColor: "purple" }) : ({color: "red"})}>CSS dinâmico</h2>
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "Red-Title" : "Title"}>Esse título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      <ChallengeCSS />
    </div>
  )
}

export default App
