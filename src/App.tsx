import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedPages from "./pages/ProtectedPages"
import HomePage from "./pages/HomePage"
import Authorization from "./pages/Authorization"



function App() {


  return (
    <div>
      <Routes>
        <Route element={<ProtectedPages />}>
          <Route path="/homepage" element={<HomePage />}/> 
          <Route path="/*" element={<Navigate replace to={'/404'}/>}/>
        </Route>
        <Route path="authorization" element={<Authorization />}/>
      </Routes>
    </div>
  )
}

export default App
