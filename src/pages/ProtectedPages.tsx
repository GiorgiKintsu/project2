import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedPages() {
    const token = false
  return (
    // permission.data?.token
    token
     ? <Outlet /> : <Navigate to='/autorization' />
  )
}
