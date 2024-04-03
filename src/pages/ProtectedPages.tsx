import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedPages() {
    const permission = JSON.parse(localStorage.getItem("token") || "{}");
  return (
    permission.data?.token ? <Outlet /> : <Navigate to='/authorization' />
  )
}
