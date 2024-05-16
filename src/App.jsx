import { Routes } from "./pages/routes/routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SelectedTableProvider} from "./contexts/SelectedTableContext"

export function App() {
  return (
    <>
      <ToastContainer />
      <SelectedTableProvider>
      <Routes />
      </SelectedTableProvider>
    </>
  )
}