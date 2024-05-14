import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import Mountain from "../../assets/mountain.svg"
import { Footer } from "../../components/Footer/Footer"
import { BeneficiaryForm } from "../../components/Forms/BeneficiaryForm"


export function RegisterBeneficiary() {

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

                <BeneficiaryForm method="post"/>
            </section >
            <Footer />
        </>
    )
}