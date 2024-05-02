import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg";
import reconstruaLogo from "../../assets/reconstrua.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="drop-shadow-lg sticky top-0 z-50 flex px-[5%]  w-full justify-center py-4 bg-slate-700 bg-dark-green md gap-4 lg:flex-col items-center">

        <nav  className="flex justify-between items-center relative w-full">
          <img src={reconstruaLogo} className="lg:w-44" alt="Reconstrua WebSite Logo" />



          <div onClick={() => setIsOpen(!isOpen)} className="hidden lg:block absolute right-0 ">
            {
              isOpen ? <CgClose className=" text-component-light" size="25px" /> : <FaBars className=" text-component-light" size="20px" />
            }
          </div>
        </nav>
        <div id="sidebar" className={`flex text-light-text font-semibold gap-14 lg:absolute top-12 z-40 bg-dark-green bg-opacity-80  lg:w-full lg:h-screen justify-center items-center lg:flex-col ${!isOpen ? "lg:hidden" : null}`}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "text-component-dark" : isActive ? "text-component-light" : "" + "hover:text-component-light hover:scale-105 transition-all duration-300 ease-in-out"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-component-light" : "" + "hover:text-component-light hover:scale-105 transition-all duration-300 ease-in-out"
            }
          >Doe</NavLink>
          <NavLink
            to="/volunteers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-component-light" : "" + "hover:text-component-light hover:scale-105 transition-all duration-300 ease-in-out"
            }
          >Voluntários</NavLink>
          <NavLink
            to="/registerUser"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-component-light" : "" + "hover:text-component-light hover:scale-105 transition-all duration-300 ease-in-out"
            }
          >Cadastro</NavLink>
          <NavLink
            to="/registerCompany"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-component-light" : "" + "hover:text-component-light hover:scale-105 transition-all duration-300 ease-in-out"
            }
          >Para Empresas</NavLink>
        </div>
      </header>
    </>
  )
}
