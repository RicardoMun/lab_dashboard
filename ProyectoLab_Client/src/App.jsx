import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import TasksPage from './pages/Tasks/TasksPage';
import TasksFormPage from './pages/Tasks/TasksFormPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/add-task" element={<TasksFormPage />} />
            <Route path="/tasks/:id" element={<TasksFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;