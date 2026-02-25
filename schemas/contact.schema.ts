import { z } from "zod";

export const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
] as const;

export const contactSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  jobTitle: z.string().nonempty("Job title is required"),
  phone: z
    .string()
    .nonempty("Phone is required")
    .regex(/^[0-9\-\s()+]+$/, "Invalid phone format"),
  email: z.string().email("Invalid email"),
  company: z.string().nonempty("Company is required"),
  employeeRange: z.enum(employeeRanges),
});

export type ContactFormData = z.infer<typeof contactSchema>;