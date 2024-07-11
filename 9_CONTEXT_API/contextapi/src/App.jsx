import './App.css'

//import do react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import das pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

//import dos components
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <h1>Context API</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
