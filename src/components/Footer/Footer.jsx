import reconstruaLogo from "../../assets/reconstrua.svg"
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-dark-green flex flex-col items-center py-10 shadow-inner">
            <img className="w-44" src={reconstruaLogo} alt="" />
            <hr className="my-8 border-component-light w-[85%]" />
            <div className="font-light text-component-light text-center">
                <h1>Copyright © 2024 Reconstrua</h1>
                <Link className="font-semibold underline" to="/login/admin">Painel ADM</Link>
            </div>
        </footer>
    )
}