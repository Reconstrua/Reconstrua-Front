import reconstruaLogo from "../../assets/reconstrua.svg"
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal/Modal.jsx";
import { DashTable } from "../../components/Table"
import { TextCard } from "../../components/TextCard"
import { getBeneficiaries, getCompanies, getVoluntaries } from "../../utils/apiFunctions.js"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx"
import { SelectedTableContext } from "../../contexts/SelectedTableContext.jsx"
import { ErrorFallback } from "./ErrorFallBack.jsx";

export function Dashboard() {
    const { logoutAdm } = useContext(AuthContext)
    const { setSelectedTable } = useContext(SelectedTableContext)
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        handleGetVoluntaries()
    },[])

    const handleGetVoluntaries = async () => {
        try {
            const response = await getVoluntaries()
            setData(response)
            setSelectedTable("voluntaries")
            setError(null);  
        } catch (error) {
            setError(error)
        }
    };

    const handleGetBeneficiaries = async () => {
        try {
            const response = await getBeneficiaries()
            setData(response)
            setSelectedTable("beneficiaries")
            setError(null);  
        } catch (error) {
            setError(error)
        }
    };

    const handleGetCompanies = async () => {
        try {
            const response = await getCompanies()
            setData(response)
            setSelectedTable("companies")
            setError(null);  
        } catch (error) {
            setError(error)
        }
    };

    return (
        <>
            <Modal />
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
                        <Button onClick={handleGetVoluntaries} buttonClass="mt-0 py-2 px-2">Voluntários</Button>
                        <Button onClick={handleGetBeneficiaries} buttonClass="mt-0 py-2 px-2">Beneficiados</Button>
                        <Button onClick={handleGetCompanies} buttonClass="mt-0 py-2 px-2">Empresas</Button>
                    </div>
                </div>
                    {error ? <ErrorFallback error={error}/> : <DashTable data={data} />}
                <div className="gap-2 flex lg:flex-wrap justify-end">
                    <Button link="/" buttonClass="mt-0 py-2 px-2">Voltar</Button>
                    <Button onClick={logoutAdm} link="/" buttonClass="mt-0 py-2 px-2">Logout</Button>
                </div>
            </div>
        </>
    )
}
