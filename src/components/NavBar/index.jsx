import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg";
import reconstruaLogo from "../../assets/reconstrua.svg"
import { Link } from "../Link"
import { useState } from "react";

export function NavBar(){
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return(
    <>
      <nav className="flex justify-between items-center relative w-full">
        <img src={reconstruaLogo} className="lg:w-40" alt="Reconstrua WebSite Logo" />
        <div className={`text-light-text lg:absolute transition-all dur lg:top-[45px] rounded-b-xl 
        lg:w-full left-0 lg:py-6 lg:items-center bg-dark-green
         font-semibold flex gap-14 lg:flex-col ${!isOpen ? "lg:hidden" : null}`}>
          <Link onClick={()=> setIsOpen(false)} path="#">Início</Link>
          <Link>Doe</Link>
          <Link>Voluntários</Link>
          <Link>Cadastro</Link>
          <Link>Empresas</Link>
        </div>
        <div onClick={()=> setIsOpen(!isOpen)} className="hidden lg:block absolute right-0">
          {
            isOpen?  <CgClose className=" text-component-light" size="25px" /> : <FaBars className=" text-component-light" size="20px"/>
          }
          
         
        </div>
      </nav>
    </>
  )
}
