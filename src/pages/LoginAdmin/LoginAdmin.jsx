import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import { MdAdminPanelSettings } from "react-icons/md";
import {SingleInput} from "../../components/SingleInput"
import { Button } from "../../components/Button";
import {AxiosAPI} from "../../AxiosConfig"
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  async function loginAdm(){
    try {
      const response = await AxiosAPI.post("/admins/login",{
        username: `${username}`,
        password: `${password}`,
      })
      if (response.status === 200) {
        const token = response.data.token
        localStorage.setItem("jwtToken", token);
        navigate("/dashboard/admin")
      }
    } catch (error) {
      console.log(error)
    }
    
}

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
          <SingleInput onChange={(e)=> setUsername(e.target.value)} text="Usuário ADM" placeholder="Digite um nome de usuário ADM" />
          <SingleInput onChange={(e)=> setPassword(e.target.value)} text="Senha" placeholder="Digite a senha" />
          <Button onClick={loginAdm} buttonClass="h-12 w-full">Login</Button>
        </div>
      </section>
    </>
  )
}