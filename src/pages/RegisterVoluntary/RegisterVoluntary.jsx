import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import Builders from "../../assets/builders.svg"
import { Footer } from "../../components/Footer/Footer"
// import { AxiosAPI } from "../../AxiosConfig"
// import { useState } from "react"
// import { toast } from 'react-toastify';
import { VoluntaryForm } from "../../components/Forms/VoluntaryForm"

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

                <VoluntaryForm method="post" />
            </section >
            <Footer />
        </>
    )
}