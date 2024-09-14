import './App.css'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import { Outlet } from "react-router-dom" 

function App() {

  return (
    <>
       <Navbar />
       {/* <Home /> */}
       <Outlet />
    </>
  )
}

export default App
