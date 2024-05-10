import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import ListarCategorias from './components/categorias/listarCategoria/ListarCategoria';
import FormCategoria from './components/categorias/formCategoria/FormCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';




function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<ListarCategorias />} />
          <Route path="/cadastroCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
           
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}
export default App;