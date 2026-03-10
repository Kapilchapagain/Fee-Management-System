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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <AdminLayout/> */}
    <UserLayout/>
    {/* <Profile/> */}
    
    </>
  )
}

export default App
