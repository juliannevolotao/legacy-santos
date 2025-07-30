import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Conference from './pages/conference/finalConf'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conference" element={<Conference />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
