import { useForm } from "react-hook-form"
import { getDataById, postData, updateData } from "../../utils/apiFunctions";
import { Button } from "../Button";
import { useContext, useEffect } from "react";
import { ToggleModalContext } from "../../contexts/ToggleModalContext";
import { beneficiarySchema } from "../../utils/resolvers/beneficiaryResolver" 
import { zodResolver } from "@hookform/resolvers/zod";

export function BeneficiaryForm({ method, id }) {
    const { isOpen } = useContext(ToggleModalContext)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(beneficiarySchema)
    });

    let onSubmit;

    switch (method) {
        case 'post':
            onSubmit = (data) => postData("beneficiaries", data);
            break;
        case 'put':
            onSubmit = (data) => updateData("beneficiaries", id, data);
            break
    }

    useEffect(() => {
        const fetchData = async () => {
            if (isOpen && method === 'put' && id) {
                try {
                    const data = await getDataById("beneficiaries", id);
                    setValue("first_name", data.first_name);
                    setValue("last_name", data.last_name);
                    setValue("email", data.email);
                    setValue("phone", data.phone);
                    setValue("cep", data.cep);
                    setValue("street", data.street);
                    setValue("neighborhood", data.neighborhood);
                    setValue("city", data.city)
                    setValue("state", data.state)
                    setValue("address_number", data.address_number)
                    setValue("description", data.description)
                } catch (error) {
                    console.error(error);
                }
            }
        };
        
        fetchData();
    }, [isOpen, method, id, setValue]);

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
                        <input type="text" id="last_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu sobrenome"
                            {...register("last_name")}
                        />
                        {errors?.last_name && <p className="text-[#ff1e1e]">{errors.last_name.message}</p>}
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">E-Mail</label>
                    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu endereço de e-mail"
                        {...register("email")}
                    />
                    {errors?.email && <p className="text-[#ff1e1e]">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Celular</label>
                    <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Insira seu telefone (Sem hífen ou parêntesis)"
                        {...register("phone")}
                    />
                    {errors?.phone && <p className="text-[#ff1e1e]">{errors.phone.message}</p>}
                </div>
                <div className="flex gap-8">
                    <div className="w-1/2">
                        <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">CEP</label>
                        <input type="text" id="cep" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu CEP"
                            {...register("cep")}
                        />
                        {errors?.cep && <p className="text-[#ff1e1e]">{errors.cep.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Rua</label>
                        <input type="text" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite sua rua"
                            {...register("street")}
                        />
                        {errors?.street && <p className="text-[#ff1e1e]">{errors.street.message}</p>}
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-1/2">
                        <label htmlFor="neighborhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Bairro</label>
                        <input type="text" id="neighborhood" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu bairro"
                            {...register("neighborhood")}
                        />
                        {errors?.neighborhood && <p className="text-[#ff1e1e]">{errors.neighborhood.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Cidade</label>
                        <input type="text" id="city" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite sua Cidade"
                            {...register("city")}
                        />
                        {errors?.city && <p className="text-[#ff1e1e]">{errors.city.message}</p>}
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-1/2">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Estado</label>
                        <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite seu estado"
                            {...register("state")}
                        />
                        {errors?.state && <p className="text-[#ff1e1e]">{errors.state.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="address_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Número da casa</label>
                        <input type="text" id="address_number" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder="Digite o número da casa"
                            {...register("address_number", {required: "auger"})}
                        />
                        {errors?.address_number && <p className="text-[#ff1e1e]">{errors.address_number.message}</p>}
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">Conte-nos sua história</label>
                    <input type="text" id="large-input" className="block w-full p-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text"
                        {...register("description")}
                    />
                    {errors?.description && <p className="text-[#ff1e1e]">{errors.description.message}</p>}
                </div>
            </div>
            <Button buttonClass="w-full" onClick={() => handleSubmit(onSubmit)()} >Enviar</Button>
        </div>
    )
};