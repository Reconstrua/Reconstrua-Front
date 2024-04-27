import {NavBar} from "../../components/NavBar"
import { TextCard } from "../../components/TextCard";
import BlocksImage from "../../assets/Buildingblocks.svg";
import DonationImage from "../../assets/donation.svg"

export function Home() {
  return (
    <>
      <header className="sticky top-0 flex w-full justify-center py-4 bg-slate-700 bg-dark-green">
        <NavBar/>
      </header>
      <section className="flex md:gap-[109px] bg-dark-green w-full h-screen md:flex-col">
        <div className="w-[50%] md:mt-6 h-full  md:items-center md:w-full flex flex-col justify-center items-end">
          <TextCard
            className="flex justify-center flex-col gap-3 items-start h-full w-[85%] "
            title={
              <>
                Conectando sonhos à <br /> realidade através da <br />{" "}
                construção de lares.
              </>
            }
            titleClass="md:text-3xl text-titleClamp text-nowrap font-bold text-component-dark md:text-wrap"
            subtitle={<>Ajudamos pessoas em situação de vulnerabilidade <br /> social a realizar o sonho de ter sua própria casa. <br /> Fazemos isso conectando voluntários, doadores de <br /> materiais de construção e famílias necessitadas.</>}
            subtitleClass="md:text-lg text-subtitleClamp text-dark-text"
            buttonText="Torne-se um voluntário"
            buttonClass="md:py-2 md:px-3 md:text-lg hover:bg-component-light hover:text-dark-text transform hover:scale-110 transition"
            disabled={false}
            dark={false}
          />
        </div>
        <div className=" flex items-center md:justify-center  h-full w-[50%] md:w-full">
          <img src={BlocksImage} alt="" className="w-[85%] items-start" />
        </div>
      </section>
      <section className="flex bg-light-green w-full h-screen md:flex-col">
        <div className="flex w-[50%] h-full items-center justify-end md:justify-center md:w-full">
          <img src={DonationImage} alt="" className="w-[85%] items-end flex" />
        </div>
        <div className="w-[50%] h-full  md:items-center md:w-full flex flex-col justify-center items-start ">
          <TextCard
            className="flex justify-center flex-col gap-3 items-start h-full w-[85%]"
            title="Quem somos"
            titleClass="md:text-3xl text-titleClamp text-nowrap font-bold text-component-dark md:text-wrap"
            subtitle={<>A Reconstrua é mais do que uma organização, é um movimento impulsionado pela convicção de que todos merecem um lugar seguro para chamar de lar. Nós não apenas construímos casas, mas transformamos sonhos em realidades tangíveis, criando lares para pessoas em situação de vulnerabilidade social.<br></br>Trabalhamos em estreita colaboração com comunidades de baixa renda, voluntários dedicados e doadores de materiais de construção para tornar o sonho da casa própria uma realidade.</>}
            subtitleClass="md:text-lg text-subtitleClamp text-dark-text"
            buttonText="Faça uma doação"
            buttonClass="md:py-2 md:px-3 md:text-lg hover:bg-component-dark hover:text-dark-green transform hover:scale-110 transition"
            disabled={false}
            dark={true}
          />
        </div>
      </section>
     
    </>
  );
}
