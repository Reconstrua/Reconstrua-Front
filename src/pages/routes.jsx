import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./Home/Home"
import { RegisterUser } from "./RegisterUser/RegisterUser"
import { Donation } from "./Donation/Donation"

export function Routes(){
  return(
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registerUser" element={<RegisterUser/>}/>
        <Route path="/donation" element={<Donation/>}/>
      </ReactRoutes>
    </Router>
  )
}