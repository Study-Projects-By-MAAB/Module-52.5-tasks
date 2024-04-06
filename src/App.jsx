import "./App.css"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="max-w-[1440px] mx-auto">
            {/* <h2 className="text-2xl text-center">This is Template Project</h2> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default App
