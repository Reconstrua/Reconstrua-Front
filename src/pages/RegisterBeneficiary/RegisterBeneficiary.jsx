import { DoubleInput } from "../../components/DoubleInput"
import { LargeInput } from "../../components/LargeInput"
import { Header } from "../../components/Header"
import { SingleInput } from "../../components/SingleInput"
import { TextCard } from "../../components/TextCard"
import Mountain from "../../assets/mountain.svg"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer/Footer"
import { AxiosAPI } from "../../AxiosConfig"
import { useState } from "react"
import { toast } from 'react-toastify';


export function RegisterBeneficiary() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cep, setCep] = useState("")
    const [street, setStreet] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [addressNumber, setAddressNumber] = useState("")
    const [description, setDescription] = useState("")

    async function postBeneficiary() {
        try {
            toast.promise(
                AxiosAPI.post("/beneficiaries", {
                    first_name: `${firstName}`,
                    last_name: `${lastName}`,
                    email: `${email}`,
                    phone: `${phone}`,
                    cep: `${cep}`,
                    street: `${street}`,
                    neighborhood: `${neighborhood}`,
                    city: `${city}`,
                    state: `${state}`,
                    address_number: `${addressNumber}`,
                    description: `${description}`
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

    return (
        <>
            <Header />
            <section className="w-full flex flex-row sm:flex-col bg-dark-green gap-4">
                <div className="w-1/2 sm:w-full h-full flex flex-col align-middle p-16">
                    <TextCard
                        className="flex flex-col w-full gap-3 h-full justify-center items-start"
                        title="Comece Sua Jornada Rumo a um Novo Lar"
                        titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
                        subtitle="Para nós, um lar é mais do que apenas um lugar, é onde a vida acontece, onde as memórias são criadas e onde os sonhos são cultivados. Se você está em busca de um recomeço, estamos aqui para ajudar. Cadastre-se para iniciar sua jornada conosco. Juntos, podemos transformar a esperança em realidade, criando um lar para você e sua família."
                        subtitleClass="text-justify text-subtitleClamp md:text-base text-light-text"
                        disabled={true}
                    />
                    <img src={Mountain} alt="" className="w-3/4 mx-0 sm:w-full mx-auto" />
                </div>

                <form className="w-1/2 sm:w-full p-16">
                    <div className="grid gap-6 mb-6 ">
                        <DoubleInput onChangeHandleFirst={(e) => setFirstName(e.target.value)} onChangeHandleSecond={(e) => setLastName(e.target.value)} text1="Nome" placeholder1="Digite seu nome" text2="Sobrenome" placeholder2="Digite seu sobrenome" />
                        <SingleInput onChange={(e) => setEmail(e.target.value)} text="E-Mail" placeholder="Digite seu endereço de e-mail" />
                        <SingleInput onChange={(e) => setPhone(e.target.value)} text="Celular" placeholder="XX XXXXXXXXX" />
                        <DoubleInput onChangeHandleFirst={(e) => setCep(e.target.value)} onChangeHandleSecond={(e) => setStreet(e.target.value)} text1="CEP" placeholder1="Digite seu CEP" text2="Endereço" placeholder2="Digite seu endereço" />
                        <DoubleInput onChangeHandleFirst={(e) => setNeighborhood(e.target.value)} onChangeHandleSecond={(e) => setCity(e.target.value)} text1="Bairro" placeholder1="Digite seu bairro" text2="Cidade" placeholder2="Digite sua cidade" />
                        <DoubleInput onChangeHandleFirst={(e) => setState(e.target.value)} onChangeHandleSecond={(e) => setAddressNumber(e.target.value)} text1="Estado" placeholder1="Digite seu estado" text2="Número" placeholder2="Digite o número da casa" />
                        <LargeInput onChange={(e) => setDescription(e.target.value)} text="Conte sua história" />
                        <Button onClick={postBeneficiary} buttonClass="w-full">Enviar</Button>
                    </div>
                </form>
            </section >
            <Footer />
        </>
    )
}