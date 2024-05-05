import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Home/>} />
        <Route path='/create' element={user ? <Create/> : <Navigate to='/login'/> } />
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>} />
        <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
