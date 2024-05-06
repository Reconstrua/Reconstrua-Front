import { DoubleInput } from "../../components/DoubleInput"
import { LargeInput } from "../../components/LargeInput"
import { Header } from "../../components/Header"
import { SingleInput } from "../../components/SingleInput"
import { TextCard } from "../../components/TextCard"
import Builders from "../../assets/builders.svg"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer/Footer"

export function RegisterVoluntary() {
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
                        <DoubleInput text1="Nome" placeholder1="Digite seu nome" text2="Sobrenome" placeholder2="Digite seu sobrenome" />
                        <SingleInput text="E-Mail" placeholder="Digite seu endereço de e-mail" />
                        <SingleInput text="Celular" placeholder="(XX) XXXXX-XXXX" />
                        <LargeInput text="Por que você quer ser um voluntário?" />
                        <Button buttonClass="w-full" onClick={()=> console.log("Deu certo")} >Me tornar um voluntário</Button>
                    </div>
                </form>
            </section >
            <Footer/>
        </>
    )
}