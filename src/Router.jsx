import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App.jsx'
import Admin from './Admin/Admin.jsx'
import Servicos from './Pages/Servicos.jsx'
import Missao from './Pages/Missao.jsx'
import Depoimentos from './Pages/Depoimentos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/missao" element={<Missao />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
