import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/home'
import Conference from './pages/conference'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conference" element={<Conference />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
