import reconstruaLogo from "../../assets/reconstrua.svg"
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal/Modal.jsx";
import { DashTable } from "../../components/Table"
import { TextCard } from "../../components/TextCard"
import { getBeneficiaries, getCompanies, getVoluntaries } from "../../utils/apiFunctions.js"
import { useState } from "react";
import { ToggleModalProvider } from "../../contexts/ToggleModalContext.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx"
import {SelectedTableContext} from "../../contexts/SelectedTableContext.jsx"


export function Dashboard() {
    const { logoutAdm } = useContext(AuthContext)
    const { selectedTable, setSelectedTable } = useContext(SelectedTableContext)
    const [data, setData] = useState([]);


    const handleGetVoluntaries = async () => {
        const response = await getVoluntaries()
        setData(response)
        setSelectedTable("voluntaries")
    };
    
    const handleGetBeneficiaries = async () => {
        const response = await getBeneficiaries()
        setData(response)
        setSelectedTable("beneficiaries")
    };
    const handleGetCompanies = async () => {
        const response = await getCompanies()
        setData(response)
        setSelectedTable("companies")
    };

   

    return (
        <>
            <ToggleModalProvider>
                <Modal/>
                <div className="bg-dark-green h-screen p-12 flex flex-col gap-5">
                    <img src={reconstruaLogo} className="lg:w-44 mx-auto mb-12" alt="Reconstrua WebSite Logo" />
                    <TextCard
                        className="flex flex-col w-full gap-3  justify-center items-start"
                        title={`Seja bem-vindo!`}
                        titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"

                        disabled={true}
                    />
                    <div className="flex items-center justify-end gap-3 md:justify-center">
                        <div className="gap-2 flex lg:flex-wrap justify-center">
                            <Button onClick={handleGetVoluntaries} buttonClass="mt-0 py-2 px-2">Voluntário</Button>
                            <Button onClick={handleGetBeneficiaries} buttonClass="mt-0 py-2 px-2">Beneficiado</Button>
                            <Button onClick={handleGetCompanies} buttonClass="mt-0 py-2 px-2">Empresa</Button>
                        </div>
                    </div>
                    <DashTable data={data}  setData={setData} />
                    <div className="gap-2 flex lg:flex-wrap justify-end">
                        <Button  link="/" buttonClass="mt-0 py-2 px-2">Voltar</Button>
                        <Button onClick={logoutAdm} link="/" buttonClass="mt-0 py-2 px-2">Logout</Button>
                    </div>
                </div>
            </ToggleModalProvider>
        </>
    )
}