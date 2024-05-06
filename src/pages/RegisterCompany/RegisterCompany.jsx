import { DoubleInput } from "../../components/DoubleInput"
import { LargeInput } from "../../components/LargeInput"
import { Header } from "../../components/Header"
import { SingleInput } from "../../components/SingleInput"
import { TextCard } from "../../components/TextCard"
import Partner from "../../assets/partner.svg"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer/Footer"

export function RegisterCompany() {
    return (
        <>  
            <Header />
            <section className="w-full flex flex-row sm:flex-col bg-dark-green gap-4">
                <div className="w-1/2 sm:w-full h-full flex flex-col align-middle p-16">
                    <TextCard
                        className="flex flex-col w-full gap-3 h-full justify-center items-start"
                        title="Seja uma empresa parceira"
                        titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
                        subtitle="Junte-se a nós na Reconstrua! Cada parceiro é essencial na construção de um futuro melhor. Seus recursos e comprometimento são fundamentais para transformar ideias em realidade, oferecendo oportunidades para quem mais precisa. Se você busca fazer a diferença, venha se juntar à nossa comunidade de parceiros comprometidos com a mudança."
                        subtitleClass="text-justify text-subtitleClamp md:text-base text-light-text"
                        disabled={true}
                        />
                    <img src={Partner} alt="" className="w-3/4 mx-0 sm:w-full mx-auto" />
                </div>

                <form className="w-1/2 sm:w-full p-16">
                    <div className="grid gap-6 mb-6 ">
                        <SingleInput text="Nome da sua empresa" placeholder="Digite o nome da sua empresa" />
                        <SingleInput text="E-Mail" placeholder="Digite o e-mail da empresa" />
                        <SingleInput text="Celular" placeholder="(XX) XXXXX-XXXX" />
                        <SingleInput text="Site" placeholder="www.suaempresa.com" />
                        <DoubleInput text1="CEP" placeholder1="Digite o CEP da empresa" text2="Endereço" placeholder2="Digite o endereço da empresa" />
                        <DoubleInput text1="Bairro" placeholder1="Digite o bairro da empresa" text2="Cidade" placeholder2="Digite a cidade da empresa" />
                        <DoubleInput text1="Estado" placeholder1="Digite seu estado" text2="Número" placeholder2="Digite o número" />
                        <LargeInput text="Conte-nos o que sua empresa faz:" />
                        <Button buttonClass="w-full">Enviar</Button>
                    </div>
                </form>
            </section >
            <Footer/>
        </>
    )
}