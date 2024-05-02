import { DoubleInput } from "../../components/DoubleInput"
import { LargeInput } from "../../components/LargeInput"
import { Header } from "../../components/Header"
import { SingleInput } from "../../components/SingleInput"
import { TextCard } from "../../components/TextCard"
import Mountain from "../../assets/mountain.svg"
import { Button } from "../../components/Button"

export function RegisterUser() {
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
                        <DoubleInput text1="Nome" placeholder1="Digite seu nome" text2="Sobrenome" placeholder2="Digite seu sobrenome" />
                        <SingleInput text="E-Mail" placeholder="Digite seu endereço de e-mail" />
                        <SingleInput text="Celular" placeholder="(XX) XXXXX-XXXX" />
                        <DoubleInput text1="CEP" placeholder1="Digite seu CEP" text2="Endereço" placeholder2="Digite seu endereço" />
                        <DoubleInput text1="Bairro" placeholder1="Digite seu bairro" text2="Cidade" placeholder2="Digite sua cidade" />
                        <DoubleInput text1="Estado" placeholder1="Digite seu estado" text2="Número" placeholder2="Digite o número da casa" />
                        <LargeInput text="Conte sua história" />
                        <Button >Enviar</Button>
                    </div>
                </form>
            </section >
        </>
    )
}