import { NavBar } from "../../components/NavBar";
import { TextCard } from "../../components/TextCard";
import BlocksImage from "../../assets/Buildingblocks.svg";
import DonationImage from "../../assets/donation.svg"

export function Home() {
  return (
    <>
      <header className="sticky top-0 flex w-full justify-center py-4 bg-slate-700 bg-dark-green">
        <NavBar />
      </header>
      <section className="flex items-center justify-center bg-dark-green w-full h-screen">
        <div className="w-[50%] h-full flex flex-col justify-center items-end ">
          <TextCard
            className="flex flex-col gap-3 items-start w-[85%]"
            title={
              <>
                Conectando sonhos à <br /> realidade através da <br />{" "}
                construção de lares.
              </>
            }
            titleClass="text-titleClamp text-nowrap font-bold text-component-dark"
            subtitle={<>Ajudamos pessoas em situação de vulnerabilidade <br /> social a realizar o sonho de ter sua própria casa. <br /> Fazemos isso conectando voluntários, doadores de <br /> materiais de construção e famílias necessitadas.</>}
            subtitleClass="text-subtitleClamp text-dark-text"
            buttonText={"Torne-se um voluntário"}
          />
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <img src={BlocksImage} alt="" className="w-[500px]" />
        </div>
      </section>
      <section className="flex flex-row-reverse items-center justify-center bg-light-green w-full h-screen">
        <div className="w-[50%] h-full flex flex-col justify-center items-end">
          <TextCard
            className='flex flex-col gap-3 items-start w-[85%] pr-16'
            title={'Quem somos'}
            titleClass="text-titleClamp text-nowrap font-bold text-component-light"
            subtitle={<>A Dream Home é mais do que uma organização, é um movimento impulsionado pela convicção de que todos merecem um lugar seguro para chamar de lar. Nós não apenas construímos casas, mas transformamos sonhos em realidades tangíveis, criando lares para pessoas em situação de vulnerabilidade social.<br></br>Trabalhamos em estreita colaboração com comunidades de baixa renda, voluntários dedicados e doadores de materiais de construção para tornar o sonho da casa própria uma realidade.</>}
            subtitleClass="text-subtitleClamp text-dark-text"
            buttonText={"Faça uma doação"}
          />
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <img src={DonationImage} alt="" className="w-[500px]" />
        </div>
      </section>
    </>
  );
}
