import {Header} from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import sharing from "../../assets/sharing.svg"
import donateMoney from "../../assets/donateMoney.svg"
import donateFurniture from "../../assets/donateFurniture.svg"
import partnership from "../../assets/partnership.svg"
import { Footer } from "../../components/Footer/Footer"
import {scrollToTop} from "../../utils/scrollToTop.js"

export function Donation() {
  return (
    <>
      <Header/>
      <section className="flex md:gap-[50px] bg-dark-green w-full h-screen md:flex-col md:h-auto">
        <div className="w-[50%] md:mt-6 px-[5%]  py-10 h-full  md:items-center md:w-full flex flex-col justify-center items-end">
          <TextCard
            className="flex flex-col w-full gap-3 h-full justify-center items-start"
            title="Transforme Sonhos em Realidade!"
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle="Acreditamos que todos merecem um lugar seguro para chamar de lar. Mas não podemos fazer isso sozinhos. Sua doação pode transformar vidas, ajudando-nos a construir casas para aqueles em situação de vulnerabilidade social. Cada contribuição, não importa o tamanho, nos ajuda a conectar sonhos à realidade. Doe hoje e faça parte desta incrível jornada de transformação."
            buttonLink="/volunteers"
            subtitleClass="text-subtitleClamp text-justify md:text-base text-light-text pr-[25%] md:p-0"
            buttonText="Quero Doar"
            onClick={()=> scrollToTop()}
          />
        </div>
        <div className=" flex px-[5%]  py-10 items-center md:justify-center  h-full w-[50%] md:w-full">
          <img src={sharing} alt="" className="w-full items-start" />
        </div>
      </section>
      <section className="flex bg-light-green py-10 items-center flex-wrap justify-center w-full h-screen px-[5%] lg:h-auto gap-24">
        <div className="flex gap-11 lg:flex-col w-full lg:justify-center">
          <div>
           <img src={donateMoney} alt="" className="h-[40%]" /> 
           <TextCard
            className="flex flex-col w-full"
            title="Doe qualquer valor"
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle={<>Cada centavo conta, sua doação, de qualquer valor, ajuda a continuar nosso trabalho.</>}
            subtitleClass="text-subtitleClamp  md:text-base text-light-text"
            buttonText="Faça uma doação"
            buttonClass="w-full text-nowrap"
            buttonLink="/volunteers"
            onClick={()=> scrollToTop()}
          />
          </div>
         <div>
          <img src={donateFurniture} alt="" className="h-[40%]"/>
          <TextCard
            className="flex flex-col w-full"
            title="Doe móveis"
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle={<>Doe móveis novos ou semi-novos. Tudo será usado em nossas casas ou vendido para levantar recursos.</>}
            subtitleClass="text-subtitleClamp md:text-base text-light-text"
            buttonText="Doe móveis"
            buttonClass="w-full text-nowrap"
            buttonLink="/volunteers"
            onClick={()=> scrollToTop()}
          />
         </div>
        
        <div>
          <img src={partnership} alt="" className="h-[40%]"/>
        <TextCard
            className="flex flex-col w-full"
            title="Parcerias"
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle="Estamos abertos a parcerias, entre em contato conosco para saber mais."
            subtitleClass="text-subtitleClamp md:text-base text-light-text"
            buttonText="Seja um parceiro"
            disabled={false}
            buttonClass="w-full text-nowrap"
            buttonLink="/register/company"
            onClick={()=> scrollToTop()}
          />
        </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}