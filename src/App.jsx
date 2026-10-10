import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/home'
import Conference from './pages/conference'
import Camp from './pages/camp';
import CampLegacy from './pages/camp/legacy';
import Camp2026 from './pages/camp/landing2026';
import Gcs from './pages/gcs';

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/camp-antigo" element={<CampLegacy />} />
        <Route path="/camp-2026" element={<Camp2026 />} />
        <Route path="/gcs" element={<Gcs />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
