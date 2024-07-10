import './App.css'

//Config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import Busca from './pages/Busca'
import NotFound from './pages/NotFound'


//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
      {/* search */}
      <SearchForm />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />}/>
          {/* Nested Route */}
          <Route path="/products/:id/info" element={<Info />}/>
          {/* search */}
          <Route path="/search" element={<Busca />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          {/* no match route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
