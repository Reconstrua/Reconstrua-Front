import { useForm } from "react-hook-form"
import { getDataById, postData, updateData } from "../../utils/apiFunctions";
import { Button } from "../Button";
import { useContext, useEffect } from "react";
import { ToggleModalContext } from "../../contexts/ToggleModalContext";
import { voluntarySchema } from "../../utils/resolvers/voluntaryResolver";
import { zodResolver } from "@hookform/resolvers/zod";

export function VoluntaryForm({ method, id }) {

    const {isOpen} = useContext(ToggleModalContext)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(voluntarySchema)
    });
    
    useEffect(() => {
        const fetchData = async () => {
            if (isOpen && method === 'put' && id) {
                try {
                    const data = await getDataById("voluntaries", id);
                    setValue("first_name", data.first_name);
                    setValue("last_name", data.last_name);
                    setValue("email", data.email);
                    setValue("phone", data.phone);
                    setValue("description", data.description);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        
        fetchData();
    }, [isOpen, method, id, setValue]);
    
    let onSubmit;

    switch (method) {
        case 'post':
            onSubmit = (data) => postData("voluntaries", data);
            break;
        case 'put':
            onSubmit = (data) => updateData("voluntaries", id, data);
            break
    }

    return (

        <div className={method === "post" ? "grid gap-6 mb-6 w-1/2 p-16 sm:w-full" : "grid gap-6 mb-6 p-16 w-full"}>
            <div className="flex flex-col w-full gap-6">
                <div className="flex gap-8">
                    <div className="w-1/2">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Nome</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu nome"
                            {...register("first_name")}
                        />
                        {errors?.first_name && <p className="text-[#ff1e1e]">{errors.first_name.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Sobrenome</label>
                        <input type="text" id="last_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu sobrenome"
                            {...register("last_name")}
                        />
                        {errors?.last_name && <p className="text-[#ff1e1e]">{errors.last_name.message}</p>}
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">E-Mail</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu endereço de e-mail"
                        {...register("email")}
                    />
                    {errors?.email && <p className="text-[#ff1e1e]">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Celular</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="XX XXXXX-XXXX"
                        {...register("phone")}
                    />
                    {errors?.phone && <p className="text-[#ff1e1e]">{errors.phone.message}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Por que você quer ser um voluntário?</label>
                    <input type="text" id="large-input" className="block w-full p-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text"
                        {...register("description")}
                    />
                    {errors?.description && <p className="text-[#ff1e1e]">{errors.description.message}</p>}
                </div>
            </div>
            <Button buttonClass="w-full mt-0 gap-0" onClick={() => handleSubmit(onSubmit)()} >Enviar</Button>
        </div>
    )
};