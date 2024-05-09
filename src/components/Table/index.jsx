import { MdDeleteForever, MdEdit } from "react-icons/md";
import {deleteData} from "../../utils/apiFunctions"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { useContext } from "react";
import { ToggleModalContext } from "../../context/ToggleModalContext";
import { NotFoundError } from "../NotFoundError";
import "./index.css"

dayjs.extend(relativeTime);
dayjs.locale("pt-br");



export const DashTable = ({ data, dataType, setData }) => {
    if (data.length === 0) {
        return <NotFoundError/>;
     }
    const {toggleModal} = useContext(ToggleModalContext)

    const getColumnHeaders = () => {
        // Crie um array vazio para armazenar os cabeçalhos das colunas
        let headers = [];

        // Adicione os cabeçalhos comuns a ambas as tabelas
        headers.push("ID", "Nome");

        // Se o tipo de dados for voluntários, adicione as colunas específicas dos voluntários
        if (dataType === 'voluntaries') {
            headers.push("Sobrenome", "Email", "Telefone", "Descrição", "Data de Registro", "Data de Atualização");
            // Adicione mais colunas específicas dos voluntários conforme necessário
        } else if (dataType === 'beneficiaries') {
            headers.push("Sobrenome", "Email", "Telefone", "CEP", "Rua", "Bairro", "Cidade", "Estado", "Número do Endereço", "Descrição", "Data de Registro", "Data de Atualização");
            // Adicione mais colunas específicas dos beneficiários conforme necessário
        } else if (dataType === 'companies') {
            headers.push("Email", "Telefone", "Site", "CEP", "Rua", "Bairro", "Cidade", "Estado", "Número do Endereço", "Descrição", "Data de Registro", "Data de Atualização");
        }

        // Retorne o array de cabeçalhos
        return headers;
    };

    return (
        <div className="overflow-x-auto rounded-[16px]">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-[#60817c] text-light-text">
                        {/* Mapeie dinamicamente os cabeçalhos da coluna */}
                        {getColumnHeaders().map((header, index) => (
                            <th key={index} className="px-4 py-2">{header}</th>
                        ))}
                        {/* Adicione aqui a coluna de ações, se necessário */}
                        <th className="px-4 py-2 w-[15%]">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Renderize dinamicamente os dados da tabela */}
                    {data.map((item) => (
                        <tr className="bg-[#fdf7e8] text-component-dark " key={item.id}>
                            {/* Renderize dinamicamente as células da tabela */}
                            {Object.keys(item).map((key) => (
                                <td key={key} className={`border px-4 py-2 ${key === "description" ? "description-column" : "truncate"}`}>
                                    {key === "createdAt" || key === "updatedAt" ? dayjs(item[key]).fromNow() : item[key]}
                                </td>
                            ))}
                            <td className="border px-4 py-2 text-center">
                                <div className="flex md:flex-col justify-center items-center gap-4 md:gap-2">
                                    <button
                                        onClick={()=> toggleModal(dataType, item.id)}
                                    >
                                        <MdEdit size="25px" className="md:w-5 h-full" />
                                    </button>
                                    <button
                                        onClick={() =>  deleteData(dataType,item.id, setData)}
                                    >
                                        <MdDeleteForever size="25px" className="md:w-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

