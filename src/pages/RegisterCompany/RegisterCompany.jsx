import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import Partner from "../../assets/partner.svg"
import { Footer } from "../../components/Footer/Footer"
import { CompanyForm } from "../../components/Forms/CompanyForm"

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

                <CompanyForm method="post"/>
            </section >
            <Footer/>
        </>
    )
}