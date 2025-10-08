import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/home'
import Conference from './pages/conference/finalConf'
import Camp from './pages/camp';
import Gcs from './pages/gcs';

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/gcs" element={<Gcs />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
