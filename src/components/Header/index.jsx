import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg";
import reconstruaLogo from "../../assets/reconstrua.svg"
import { Link } from "../Link"
import { useState } from "react";

export function Header() { 
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="drop-shadow-lg sticky top-0 z-50 flex px-[5%]  w-full justify-center py-4 bg-slate-700 bg-dark-green md gap-4 lg:flex-col items-center">
        
        <nav className="flex justify-between items-center relative w-full">
          <img src={reconstruaLogo} className="lg:w-44" alt="Reconstrua WebSite Logo" />
          


          <div onClick={() => setIsOpen(!isOpen)} className="hidden lg:block absolute right-0 ">
            {
              isOpen ? <CgClose className=" text-component-light" size="25px" /> : <FaBars className=" text-component-light" size="20px" />
            }
          </div>
        </nav>
          <div className={`flex text-light-text font-semibold gap-14 lg:absolute top-12 z-40 bg-dark-green bg-opacity-80  lg:w-full lg:h-screen justify-center items-center lg:flex-col ${!isOpen ? "lg:hidden" : null}`}>
            <Link onClick={() => setIsOpen(false)} path="#">Início</Link>
            <Link>Doe</Link>
            <Link>Voluntários</Link>
            <Link>Cadastro</Link>
            <Link>Empresas</Link>
          </div>
      </header>
    </>
  )
}
