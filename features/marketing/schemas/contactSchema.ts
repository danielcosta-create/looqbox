import { z } from "zod";

export const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
] as const;

export const contactSchema = z.object({
  firstName: z.string().nonempty("Nome é obrigatório"),
  lastName: z.string().nonempty("Sobrenome é obrigatório"),
  jobTitle: z.string().nonempty("Cargo é obrigatório"),
  phone: z
    .string()
    .nonempty("Telefone é obrigatório")
    .regex(/^[0-9\-\s()+]+$/, "Formato de telefone inválido"),
  email: z.email("E-mail inválido"),
  company: z.string().nonempty("Empresa é obrigatória"),
  employeeRange: z.enum(employeeRanges),
});

export type ContactFormData = z.infer<typeof contactSchema>;
