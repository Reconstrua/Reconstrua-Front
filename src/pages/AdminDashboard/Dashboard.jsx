import reconstruaLogo from "../../assets/reconstrua.svg"
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { TextCard } from "../../components/TextCard"

export function Dashboard() {

    const admin = "admin";
    return (
        <>
            <div className="bg-dark-green h-full p-12">
                <img src={reconstruaLogo} className="lg:w-44 mx-auto mb-12" alt="Reconstrua WebSite Logo" />
                <TextCard
                    className="flex flex-col w-full gap-3 h-full justify-center items-start"
                    title={`Seja bem-vindo, ${admin}!`}
                    titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"

                    disabled={true}
                />
                <div className="flex items-center justify-between">
                    <h1 className="text-light-text font-semibold text-lg">Tabelas</h1>
                    <div className="gap-2 flex">
                        <Button buttonClass="mt-0 py-2 px-2 w-32">Voluntário</Button>
                        <Button buttonClass="mt-0 py-2 px-2 w-32">Beneficiado</Button>
                        <Button buttonClass="mt-0 py-2 px-2 w-32">Empresa</Button>
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}