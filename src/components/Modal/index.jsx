import { CgClose } from "react-icons/cg";
import { SingleInput } from "../SingleInput";
import { DoubleInput } from "../DoubleInput";
import { LargeInput } from "../LargeInput";
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import { ToggleModalContext } from "../../context/ToggleModalContext";
import { getDataById } from "../../utils/apiFunctions";
import { toast } from 'react-toastify';
import { AxiosAPI } from "../../AxiosConfig"



export function Modal({ dataType, dataId }) {
  const token = localStorage.getItem("jwtToken")
  const { isOpen, toggleModal } = useContext(ToggleModalContext)
  const [data, setData] = useState([])

  //BENEFICIARIOS

  const [beneficiaryFirstName, setBeneficiaryFirstName] = useState("")
  const [beneficiaryLastName, setBeneficiaryLastName] = useState("")
  const [beneficiaryEmail, setBeneficiaryEmail] = useState("")
  const [beneficiaryPhone, setBeneficiaryPhone] = useState("")
  const [beneficiaryCep, setBeneficiaryCep] = useState("")
  const [beneficiaryStreet, setBeneficiaryStreet] = useState("")
  const [beneficiaryNeighborhood, setBeneficiaryNeighborhood] = useState("")
  const [beneficiaryCity, setBeneficiaryCity] = useState("")
  const [beneficiaryState, setBeneficiaryState] = useState("")
  const [beneficiaryAddressNumber, setBeneficiaryAddressNumber] = useState("")
  const [beneficiaryDescription, setBeneficiaryDescription] = useState("")

  //Voluntaries

  const [voluntaryFirstName, setVoluntaryFirstName] = useState("")
  const [voluntaryLastName, setVoluntaryLastName] = useState("")
  const [voluntaryEmail, setVoluntaryEmail] = useState("")
  const [voluntaryPhone, setVoluntaryPhone] = useState("")
  const [voluntaryDescription, setVoluntaryDescription] = useState("")

  //Companies

  const [companyName, setCompanyName] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [companyPhone, setCompanyPhone] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [companyCep, setCompanyCep] = useState("")
  const [companyStreet, setCompanyStreet] = useState("")
  const [companyNeighborhood, setCompanyNeighborhood] = useState("")
  const [companyCity, setCompanyCity] = useState("")
  const [companyState, setCompanyState] = useState("")
  const [companyAddressNumber, setCompanyAddressNumber] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")

  async function updateVoluntary(dataId) {
    try {
      const response = await AxiosAPI.put(`/voluntaries/${dataId}`, {
        first_name: `${voluntaryFirstName}`,
        // last_name: `${voluntaryLastName}`,
        // email: `${voluntaryEmail}`,
        // phone: `${voluntaryPhone}`,
        // description: `${voluntaryDescription}`
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  }
  async function updateBeneficiary(dataId) {
    try {
      toast.promise(
        AxiosAPI.put(`/beneficiaries/${dataId}`, {
          first_name: `${beneficiaryFirstName}`,
          last_name: `${beneficiaryLastName}`,
          email: `${beneficiaryEmail}`,
          phone: `${beneficiaryPhone}`,
          cep: `${beneficiaryCep}`,
          street: `${beneficiaryStreet}`,
          neighborhood: `${beneficiaryNeighborhood}`,
          city: `${beneficiaryCity}`,
          state: `${beneficiaryState}`,
          address_number: `${beneficiaryAddressNumber}`,
          description: `${beneficiaryDescription}`
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: 'Enviando...',
          success: 'Enviado com Sucesso!',
          error: 'Erro ao enviar'
        }
      );
    } catch (err) {
      console.error(err);
      toast.error('Erro ao enviar');
    }
  }
  async function updateCompany(dataId) {
    try {
      toast.promise(
        AxiosAPI.put(`/companies/${dataId}`, {
          company_name: `${companyName}`,
          email: `${companyEmail}`,
          phone: `${companyPhone}`,
          website: `${companyWebsite}`,
          cep: `${companyCep}`,
          street: `${companyStreet}`,
          neighborhood: `${companyNeighborhood}`,
          city: `${companyCity}`,
          state: `${companyState}`,
          address_number: `${companyAddressNumber}`,
          description: `${companyDescription}`
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: 'Enviando...',
          success: 'Enviado com Sucesso!',
          error: 'Erro ao enviar'
        }
      );
    } catch (err) {
      console.error(err);
      toast.error('Erro ao enviar');
    }
  }






  useEffect(() => {
    console.log(dataId)
    if (isOpen == true) {
      getDataById(dataType, dataId, setData);
      console.log(`${data} bbb`)
      console.log(isOpen)
    }
  }, [isOpen]);


  return (
    <>
      <div className={`bg-dark-green flex items-center justify-center fixed bg-opacity-5 backdrop-filter backdrop-blur-[6px] z-50 h-screen w-full transition-opacity duration-300 ${isOpen == false ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="bg-[#2d4c47] p-8 w-[60%] lg:w-[80%] rounded-2xl h-[90%]">
          <div className="w-full flex justify-end cursor-pointer">
            <CgClose onClick={toggleModal} size="32px" />
          </div>
          <div>

            {dataType == "voluntaries" &&
              <>
                <DoubleInput onChangeHandleFirst={(e) => setVoluntaryFirstName(e.target.value)} onChangeHandleSecond={(e) => setVoluntaryLastName(e.target.value)} text1="Nome" placeholder1={data.first_name} text2="Sobrenome" placeholder2={data.last_name} />
                <SingleInput onChange={(e) => setVoluntaryEmail(e.target.value)} text="E-Mail" placeholder={data.email} />
                <SingleInput onChange={(e) => setVoluntaryPhone(e.target.value)} text="Celular" placeholder={data.phone} />
                <LargeInput onChange={(e) => setVoluntaryDescription(e.target.value)} text="Por que você quer ser um voluntário?" />
                <Button onClick={updateVoluntary} buttonClass="w-full"  >Salvar</Button>
              </>}
            {dataType == "beneficiaries" &&
              <>
                <DoubleInput onChangeHandleFirst={(e) => setBeneficiaryFirstName(e.target.value)} onChangeHandleSecond={(e) => setBeneficiaryLastName(e.target.value)} text1="Nome" placeholder1={data.first_name} text2="Sobrenome" placeholder2={data.last_name} />
                <SingleInput onChange={(e) => setBeneficiaryEmail(e.target.value)} text="E-Mail" placeholder={data.email} />
                <SingleInput onChange={(e) => setBeneficiaryPhone(e.target.value)} text="Celular" placeholder={data.phone} />
                <DoubleInput onChangeHandleFirst={(e) => setBeneficiaryCep(e.target.value)} onChangeHandleSecond={(e) => setBeneficiaryStreet(e.target.value)} text1="CEP" placeholder1={data.cep} text2="Endereço" placeholder2={data.street} />
                <DoubleInput onChangeHandleFirst={(e) => setBeneficiaryNeighborhood(e.target.value)} onChangeHandleSecond={(e) => setBeneficiaryCity(e.target.value)} text1="Bairro" placeholder1={data.neighborhood} text2="Cidade" placeholder2={data.city} />
                <DoubleInput onChangeHandleFirst={(e) => setBeneficiaryState(e.target.value)} onChangeHandleSecond={(e) => setBeneficiaryAddressNumber(e.target.value)} text1="Estado" placeholder1={data.state} text2="Número" placeholder2={data.address_number} />
                <LargeInput onChange={(e) => setBeneficiaryDescription(e.target.value)} text="Conte sua história" />
                <Button onClick={updateBeneficiary} buttonClass="w-full">Enviar</Button>
              </>}
            {dataType == "companies" &&
              <>
                <SingleInput onChange={(e) => setCompanyName(e.target.value)} text="Nome da sua empresa" placeholder={data.company_name} />
                <SingleInput onChange={(e) => setCompanyEmail(e.target.value)} text="E-Mail" placeholder={data.email} />
                <SingleInput onChange={(e) => setCompanyPhone(e.target.value)} text="Celular" placeholder={data.phone} />
                <SingleInput onChange={(e) => setCompanyWebsite(e.target.value)} text="Site" placeholder={data.website} />
                <DoubleInput onChangeHandleFirst={(e) => setCompanyCep(e.target.value)} onChangeHandleSecond={(e) => setCompanyStreet(e.target.value)} text1="CEP" placeholder1={data.cep} text2="Endereço" placeholder2={data.street} />
                <DoubleInput onChangeHandleFirst={(e) => setCompanyNeighborhood(e.target.value)} onChangeHandleSecond={(e) => setCompanyCity(e.target.value)} text1="Bairro" placeholder1={data.neighborhood} text2="Cidade" placeholder2={data.city} />
                <DoubleInput onChangeHandleFirst={(e) => setCompanyState(e.target.value)} onChangeHandleSecond={(e) => setCompanyAddressNumber(e.target.value)} text1="Estado" placeholder1={data.state} text2="Número" placeholder2={data.address_number} />
                <LargeInput onChange={(e) => setCompanyDescription(e.target.value)} text="Conte-nos o que sua empresa faz:" />
                <Button onClick={updateCompany} buttonClass="w-full">Enviar</Button>
              </>}
          </div>
        </div>
      </div>
    </>
  )
}