import reconstruaLogo from "../../assets/reconstrua.svg"
import { Button } from "../../components/Button";
import {DashTable} from "../../components/Table"
import { TextCard } from "../../components/TextCard"
import {getVoluntaries, getBeneficiaries, getCompanies} from "../../components/Table"
import { useState } from "react";

export function Dashboard() {
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState('voluntaries'); // Inicialmente, exibir dados de voluntários

    const handleGetVoluntaries = () => {
        getVoluntaries(setData);
        setDataType('voluntaries'); // Atualizar o tipo de dados para voluntários
    };
    
    const handleGetBeneficiaries = () => {
        getBeneficiaries(setData);
        setDataType('beneficiaries'); // Atualizar o tipo de dados para beneficiários
    };
    const handleGetCompanies = () => {
        getCompanies(setData);
        setDataType('companies'); // Atualizar o tipo de dados para beneficiários
    };
    return (
        <>
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
                <DashTable data={data} dataType={dataType}/>
            </div>
        </>
    )
}