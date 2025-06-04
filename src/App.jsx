import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Produit from './pages/Produits/Produit'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="produit" element={<Produit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
