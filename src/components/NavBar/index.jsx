import reconstruaLogo from "../../assets/reconstrua.svg"
import { Link } from "../Link"

export function NavBar(){
  return(
    <>
      <nav className="flex justify-between w-[85%] items-center">
        <img src={reconstruaLogo} className="w-60" alt="Reconstrua WebSite Logo" />
        <div className="text-dark-text font-semibold flex gap-14">
          <Link path="#">Início</Link>
          <Link>Doe</Link>
          <Link>Voluntários</Link>
          <Link>Cadastro</Link>
          <Link>Empresas</Link>
        </div>
      </nav>
    </>
  )
}