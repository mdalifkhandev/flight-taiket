import { Outlet } from "react-router-dom"
import NavBar from "./page/NavBar"
import Footer from "./page/Footer"


function App() {


  return (
    <>
      
      <NavBar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    
    </>
  )
}

export default App
