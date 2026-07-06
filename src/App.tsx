import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import RoutesPage from './pages/RoutesPage';
import PracticalInfo from './pages/PracticalInfo';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/info" element={<PracticalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
