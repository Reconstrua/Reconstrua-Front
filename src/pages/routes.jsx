import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./Home/Home"
import { RegisterUser } from "./RegisterUser/RegisterUser"
import { Donation } from "./Donation/Donation"
import { RegisterVoluntary } from "./RegisterVoluntary/RegisterVoluntary"
import { RegisterCompany } from "./RegisterCompany/RegisterCompany"
import { LoginAdmin } from "./LoginAdmin/LoginAdmin"

export function Routes(){
  return(
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register/user" element={<RegisterUser/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/volunteers" element={<RegisterVoluntary/>}/>
        <Route path="/register/company" element={<RegisterCompany/>} />
        <Route path="/login/admin" element={<LoginAdmin/>} />
      </ReactRoutes>
    </Router>
  )
}