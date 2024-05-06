import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import { MdAdminPanelSettings } from "react-icons/md";
import {SingleInput} from "../../components/SingleInput"
import { Button } from "../../components/Button";

export function LoginAdmin() {
  return (
    <>
      <Header />
      <section className="flex md:gap-[50px] bg-dark-green w-full h-screen md:flex-col md:h-auto">
        <div className=" flex px-[5%]  py-10 items-center md:justify-center  h-full w-[50%] md:w-full">
          <MdAdminPanelSettings size="100%" className="text-component-light" />
        </div>
        <div className="w-[50%] md:mt-6 px-[10%] gap-6 py-10 h-full  md:items-center md:w-full flex flex-col justify-center">
          <TextCard 
            title="Para Adm’s"
            titleClass="text-titleClamp md:text-3xl text-component-light font-semibold"
            subtitle="Área somente para Adm’s cadastrados! Quer se tornar um Adm? Fale com a nossa equipe!"
            subtitleClass="text-justify text-subtitleClamp md:text-base text-light-text"
            disabled
          />
          <SingleInput text="Usuário ADM" placeholder="Digite um nome de usuário ADM" />
          <SingleInput text="Senha" placeholder="Digite a senha" />
          <Button buttonClass="h-12 ">Login</Button>
        </div>
      </section>
    </>
  )
}