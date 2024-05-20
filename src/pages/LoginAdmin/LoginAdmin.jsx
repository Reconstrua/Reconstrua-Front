import { Header } from "../../components/Header"
import { TextCard } from "../../components/TextCard"
import { MdAdminPanelSettings } from "react-icons/md";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export function LoginAdmin() {
  const { register, handleSubmit, formState:{errors} } = useForm()
  const {loginAdm, tokenValidation} = useContext(AuthContext)

  const onSubmit = (data) => loginAdm(data)

  useEffect(() => {
    console.log("passou")
    const token = localStorage.getItem("jwtToken");
    if (token) {
      tokenValidation(token);
    } 
  }, []);
  

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
          <form className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Usuário ADMIN</label>
            <input {...register("username", {required: "Este campo é obrigatório"})} autoComplete="off" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" />
            {errors?.username && <p className="text-[#ff1e1e]">{errors.username.message}</p>}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Senha</label>
            <input {...register("password", {required: "Este campo é obrigatório"})} autoComplete="off" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" />
            {errors?.password && <p className="text-[#ff1e1e]">{errors.password.message}</p>}
            <Button onClick={handleSubmit(onSubmit)} buttonClass="h-12 w-full">Login</Button>
          </form>

        </div>
      </section>
    </>
  )
}