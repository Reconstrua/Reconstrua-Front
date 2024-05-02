import reconstruaLogo from "../../assets/reconstrua.svg"

export function Footer() {
    return (
        <footer className="bg-dark-green flex flex-col items-center py-10">
            <img className="w-44" src={reconstruaLogo} alt="" />
            <hr className="my-8 border-component-light w-[85%]" />
            <div>
                <h1 className="font-light text-component-light">Copyright © 2024 Reconstrua</h1>
            </div>
        </footer>
    )
}