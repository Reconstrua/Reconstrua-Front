import { Routes } from "./pages/routes/routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}