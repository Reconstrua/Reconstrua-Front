import { z } from "zod";

const phoneRegex = /^(\+?55)?\s?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
const cepRegex = /^\d{5}-\d{3}$/;

export const companySchema = z.object({
    company_name: z.string({ message: "O nome da empresa deve ser um texto válido!" })
        .nonempty({ message: "O nome da empresa é obrigatório!" }),

    email: z.string()
        .nonempty({ message: "O e-mail é obrigatório!" })
        .email({ message: "Por favor, insira um endereço de email válido" }),

    phone: z.string()
        .nonempty({ message: "O telefone é obrigatório!" })
        .regex(phoneRegex, { message: "Por favor, insira um telefone válido!" }),

    website: z.string()
        .url({ message: "Por favor, insira uma URL válida" }),

    cep: z.string()
        .nonempty({ message: "O CEP é obrigatório!" })
        .regex(cepRegex, { message: "CEP inválido. Deve ser no formato 00000-000" }),

    street: z.string()
        .nonempty({ message: "A rua é obrigatória!" }),

    neighborhood: z.string()
        .nonempty({ message: "O bairro é obrigatório!" }),

    city: z.string()
        .nonempty({ message: "A cidade é obrigatória!" })
        .min(3, { message: "A cidade deve ter pelo menos 3 caracteres" }),

    state: z.string()
        .nonempty({ message: "O estado é obrigatório!" })
        .min(2, { message: "O estado deve ter pelo menos 2 caracteres" }),

    address_number: z.string()
        .nonempty({ message: "O número da casa é obrigatório!" })
        .regex(/^\d+$/, { message: "O número da casa deve conter apenas números" })
        .transform((val) => parseInt(val, 10)),
    
    description: z.string()
        .nonempty({ message: "A descrição é obrigatória!" })
});
