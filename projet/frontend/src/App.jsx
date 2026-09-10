import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Budget from './pages/Budget'
import Meals from './pages/Meals'
import Spaces from './pages/Spaces'
import SpaceDetails from './pages/SpaceDetails'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyEmail'
import VerifySuccess from './pages/VerifySuccess'
import ProtectedRoute from './components/ProtectedRoute'
import AppLayout from './components/AppLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-success" element={<VerifySuccess />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/:id" element={<SpaceDetails />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}