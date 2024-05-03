import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./Home/Home"
import { RegisterUser } from "./RegisterUser/RegisterUser"
import { Donation } from "./Donation/Donation"
import { RegisterVoluntary } from "./RegisterVoluntary/RegisterVoluntary"
import { RegisterCompany } from "./RegisterCompany/RegisterCompany"

export function Routes(){
  return(
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registerUser" element={<RegisterUser/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/volunteers" element={<RegisterVoluntary/>}/>
        <Route path="/registerCompany" element={<RegisterCompany/>} />
      </ReactRoutes>
    </Router>
  )
}