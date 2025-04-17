import './App.css'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria'
import FormularioCategoria from './components/categorias/formulariocategoria/FormularioCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria/>} />
            <Route path="/cadastrarcategoria" element={<FormularioCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App