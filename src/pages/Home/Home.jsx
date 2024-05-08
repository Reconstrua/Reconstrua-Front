import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard";
import BlocksImage from "../../assets/Buildingblocks.svg";
import DonationImage from "../../assets/donation.svg"
import { FaEye } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { PiHandHeartFill } from "react-icons/pi";
import handImg from "../../assets/hand.svg"
import { ProfileCard } from "../../components/ProfileCard";
import Paulo from "../../assets/img/Paulo.png"
import Joao from "../../assets/img/Joao.png"
import Oziel from "../../assets/img/Oziel.png"
import { Footer } from "../../components/Footer/Footer";
import {scrollToTop} from "../../utils/scrollToTop.js"

export function Home() {
  return (
    <>
      <Header/>
      <section className="flex md:gap-[50px] bg-dark-green w-full h-screen md:flex-col md:h-auto">
        <div className="w-[50%] md:mt-6 px-[5%]  py-10 h-full  md:items-center md:w-full flex flex-col justify-center items-end">
          <TextCard
            className="flex flex-col w-full gap-3 h-full justify-center items-start"
            title="Conectando sonhos à realidade através da construção de lares."
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle="Ajudamos pessoas em situação de vulnerabilidade social a realizar o sonho de ter sua própria casa. Fazemos isso conectando voluntários, doadores de materiais de construção e famílias necessitadas. "
            subtitleClass="text-justify text-subtitleClamp md:text-base text-light-text pr-[25%] md:p-0"
            buttonText="Torne-se um Voluntário "
            buttonLink="/register/volunteer"
            onClick={()=> scrollToTop()}
            disabled={false}
          />
        </div>
        <div className=" flex px-[5%]  py-10 items-center md:justify-center  h-full w-[50%] md:w-full">
          <img src={BlocksImage} alt="" className="w-full items-start" />
        </div>
      </section>


      <section className="w-full h-screen flex bg-light-green md:flex-col md:h-auto">

        <div className="w-[50%] px-[5%] py-10 md:h-[50%] md:justify-center  md:w-full h-full flex ">
          <img className="w-full  " src={DonationImage} alt="Donation Image" />
        </div>

        <div className="w-[50%] md:h-[50%] px-[5%]  py-10 md:items-center md:text  flex flex-col justify-center md:w-full ">
          <TextCard
            className="flex text-justify flex-col w-full gap-3 h-full justify-center items-start"
            title="Quem somos"
            titleClass="text-titleClamp md:text-3xl text-component-dark font-semibold"
            subtitle="A Reconstrua é mais do que uma organização, é um movimento impulsionado pela convicção de que todos merecem um lugar seguro para chamar de lar. Nós não apenas construímos casas, mas transformamos sonhos em realidades tangíveis, criando lares para pessoas em situação de vulnerabilidade social.
            Trabalhamos em estreita colaboração com comunidades de baixa renda, voluntários dedicados e doadores de materiais de construção para tornar o sonho da casa própria uma realidade."
            subtitleClass="text-subtitleClamp md:text-base text-light-text"
            buttonText="Faça uma doação"
            buttonLink="/register/volunteer"
            onClick={()=> scrollToTop()}
            dark
            disabled={false}
          />
        </div>
      </section>
      <section className="w-full h-screen flex bg-dark-green md:h-auto md:flex-col">
        <div className="w-[50%] h-full px-[5%] justify-center md:w-full py-10 md:items-center md:text  flex">
          <div className="justify-center w-full flex flex-col gap-4 ">
            <TextCard
              className="flex flex-col "
              title={<>Nossa Visão <FaEye /> </>}
              titleClass="flex text-component-light items-center gap-6 text-titleClamp md:text-2xl font-semibold"
              subtitle="Construir lares para pessoas em situação de vulnerabilidade social, oferecendo moradia digna, qualidade de vida e cidadania."
              subtitleClass="text-subtitleClamp text-light-text md:text-base"
              disabled
            />

            <TextCard
              className="flex flex-col "
              title={<>Nossa Missão <FiTarget /> </>}
              titleClass="flex text-component-light items-center gap-6 text-titleClamp md:text-2xl font-semibold"
              subtitle="Ser uma ONG de referência na construção social, impactando positivamente a vida de milhares de pessoas e contribuindo para um mundo mais justo e solidário."
              subtitleClass="text-subtitleClamp text-light-text md:text-base "
              disabled
            />
            <TextCard
              className="flex flex-col "
              title={<>Nossos Valores <PiHandHeartFill /> </>}
              titleClass="flex text-component-light items-center gap-6 text-titleClamp md:text-2xl  font-semibold"
              subtitle={<><ul className="list-disc flex flex-col ps-[5%]">
                <li>Compromisso</li>
                <li>Integridade</li>
                <li>Colaboração</li>
                <li>Sustentabilidade</li>
                <li>Empatia</li>
              </ul></>}
              subtitleClass="text-subtitleClamp text-light-text md:text-base"
              disabled
            />
          </div>

        </div>
        <div className="w-[50%] justify-end py-10 md:w-full flex ">
          <img className="w-[85%] " src={handImg} alt="" />
        </div>
      </section>

      <section className="flex bg-light-green w-full h-screen flex-col">
        <div className="flex w-full px-[5%] gap-14 py-10 h-screen flex-col justify-center items-center">
          <h1 className="text-titleClamp md:text-2xl font-semibold text-component-dark">
            Conheça Nossa Equipe
          </h1>
          <div className="flex items-center w-full justify-evenly gap-4 md:flex-col">
            <ProfileCard
              profileImg={Paulo}
              profileLink="https://github.com/Paulo-Ricard0"
              name="Paulo Ricardo"
              position="Desenvolvedor Full-Stack"
              alt="Paulo Ricardo" />
            <ProfileCard
              profileImg={Joao}
              profileLink="https://github.com/SirTargino"
              name="João Targino"
              position="Desenvolvedor Full-Stack"
              alt="João Targino" />
            <ProfileCard
              profileImg={Oziel}
              profileLink="https://github.com/devoziel-s"
              name="Oziel Sousa"
              position="Desenvolvedor Full-Stack"
              alt="Oziel Sousa" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
