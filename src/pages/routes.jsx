import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./Home/Home"
import { RegisterUser } from "./RegisterUser/RegisterUser"

export function Routes(){
  return(
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registerUser" element={<RegisterUser/>}/>
      </ReactRoutes>
    </Router>
  )
}