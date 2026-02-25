import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
  employeeRanges,
} from "@/features/marketing/schemas/contactSchema";
import { message } from "antd";
import { ConsoleLogger, toSelectOptions } from "@/shared/utils";
import { FetchHttpClient } from "@/shared/services";
import { env } from "@/config/env";
import { ContactService } from "@/features/marketing/services/contactService";

export function useContactForm() {
  const [loading, setLoading] = useState(false);

  const logger = new ConsoleLogger();
  const httpClient = new FetchHttpClient(env.NEXT_PUBLIC_API_URL);
  const contactService = new ContactService(logger, httpClient);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const employeeRangeOptions = toSelectOptions(employeeRanges);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      await contactService.createContact(data);

      message.success("Formulário enviado com sucesso");
      reset();
    } catch (error) {
      logger.error(error);
      message.error("Erro ao enviar formulário.");
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    employeeRangeOptions,
    isValid,
  };
}
