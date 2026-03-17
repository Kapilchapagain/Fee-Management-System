import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AlarmClock, Car, Eye, Facebook, Lock } from 'lucide-react'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'
import Profile from './profile/Profile'
import DueForm from './features/user/components/DueForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path='/' element={<AdminLayout/>}/>
      {/* <Route path='/Userlayout' element={<UserLayout/>}/> */}
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
        <Route path="/adminlayout" element={<AdminLayout />}/>
         
          <Route path="/dueform" element={<DueForm />} />

        {/* User Routes */}
        <Route path="/userlayout" element={<UserLayout />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
    </Routes>
    </BrowserRouter>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <AdminLayout/> */}
    {/* <UserLayout/> */}
    {/* <Profile/> */}
    {/* <DueForm/> */}
    
    </>
  )
}

export default App
