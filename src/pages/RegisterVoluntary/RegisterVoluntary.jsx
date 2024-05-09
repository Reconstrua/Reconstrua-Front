import { DoubleInput } from "../../components/DoubleInput"
import { LargeInput } from "../../components/LargeInput"
import { Header } from "../../components/Header"
import { SingleInput } from "../../components/SingleInput"
import { TextCard } from "../../components/TextCard"
import Builders from "../../assets/builders.svg"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer/Footer"
import { AxiosAPI } from "../../AxiosConfig"
import { useState } from "react"
import { toast } from 'react-toastify';

export function RegisterVoluntary() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [description,setDescription] = useState("")

    async function postVoluntary() {
        try {
            toast.promise(
                AxiosAPI.post("/voluntaries", {
                    first_name: `${firstName}`,
                    last_name: `${lastName}`,
                    email: `${email}`,
                    phone: `${phone}`,
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
                        title="Seja um voluntário"
                        titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
                        subtitle="Na Reconstrua, cada voluntário é um construtor de sonhos. Seu tempo, energia e paixão são os tijolos e argamassa que transformam a esperança em realidade, criando lares para aqueles que mais precisam. Se você está procurando uma maneira significativa de contribuir, de fazer a diferença, de mudar o mundo um lar de cada vez, então junte-se a nós e torne-se parte da nossa comunidade dedicada de sonhadores e realizadores."
                        subtitleClass="text-justify text-subtitleClamp md:text-base text-light-text"
                        disabled={true}
                    />
                    <img src={Builders} alt="" className="w-3/4 mx-0 sm:w-full mx-auto" />
                </div>

                <form className="w-1/2 sm:w-full p-16">
                    <div className="grid gap-6 mb-6 ">
                        <DoubleInput onChangeHandleFirst={(e)=> setFirstName(e.target.value)} onChangeHandleSecond={(e)=> setLastName(e.target.value)} text1="Nome" placeholder1="Digite seu nome" text2="Sobrenome" placeholder2="Digite seu sobrenome" />
                        <SingleInput onChange={(e)=> setEmail(e.target.value)} text="E-Mail" placeholder="Digite seu endereço de e-mail" />
                        <SingleInput onChange={(e)=> setPhone(e.target.value)} text="Celular" placeholder="XX XXXXX-XXXX" />
                        <LargeInput onChange={(e)=> setDescription(e.target.value)} text="Por que você quer ser um voluntário?" />
                        <Button buttonClass="w-full" onClick={postVoluntary} >Me tornar um voluntário</Button>
                    </div>
                </form>
            </section >
            <Footer />
        </>
    )
}