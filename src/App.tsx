import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeEmpregado from './pages/HomeEmprega/HomeEmpregado'

function App() {


  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomeEmpregado />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  )
}

export default App
