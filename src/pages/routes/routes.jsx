import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "../Home/Home"
import { RegisterBeneficiary } from "../RegisterBeneficiary/RegisterBeneficiary"
import { Donation } from "../Donation/Donation"
import { RegisterVoluntary } from "../RegisterVoluntary/RegisterVoluntary"
import { RegisterCompany } from "../RegisterCompany/RegisterCompany"
import { LoginAdmin } from "../LoginAdmin/LoginAdmin"
import { Dashboard } from "../AdminDashboard/Dashboard"
import { AuthProvider } from "../../contexts/AuthContext"
import { PrivateRoute } from "../routes/privateRoute"


export function Routes() {
  return (
    <Router>
      <AuthProvider>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/register/beneficiary" element={<RegisterBeneficiary />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/register/volunteer" element={<RegisterVoluntary />} />
          <Route path="/register/company" element={<RegisterCompany />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/dashboard/admin"
            element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
        </ReactRoutes>
      </AuthProvider>
    </Router>
  )
}