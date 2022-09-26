import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Guest from './components/Guest/Guest';
import Login from './components/Login/Login';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard></Dashboard>
          </ProtectedRoutes>
        } />
        <Route path="/guest" element={<Guest />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
