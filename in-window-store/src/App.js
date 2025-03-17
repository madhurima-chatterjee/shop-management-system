import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import Products from './pages/Products';
import Shops from './pages/Shops';
import Staff from './pages/Staff';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
