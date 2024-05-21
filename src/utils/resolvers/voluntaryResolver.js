import { z } from "zod";

const phoneRegex = /^(\+?55)?\s?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;

export const voluntarySchema = z.object({
    //Apesar do método z.noempty estar marcado como obsoleto, tive que utilizá-lo para evitar que o formulário seja enviado sem o nome. O método z.string não permite o envio de informações vazias, mas não retorna a mensagem de erro.
    first_name: z.string({ message: "O nome deve ser um texto válido!" }).nonempty({ message: "O nome é obrigatório!" }),
    last_name: z.string({ message: "O sobrenome é obrigatório!" }).nonempty({ message: "O sobrenome é obrigatório!" }),
    email: z.string().email({ message: "Por favor, insira um endereço de email válido" }).nonempty({ message: "O e-mail é obrigatório!" }),
    phone: z.string().regex(phoneRegex, {message: "Por favor, insira um telefone válido!"}).nonempty({ message: "O telefone é obrigatório!" }),
    description: z.string().nonempty({ message: "A descrição é obrigatória!" })
})