import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData, employeeRanges } from "@/schemas/contact.schema";
import { message } from "antd";
import { logger } from "@/utils/logger";
import { contactService } from "@/services/contact.service";

export function useContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);

  const mapToOptions = (data: string[]) => {
    const parsedData = data.map((range) => ({
      label: range,
      value: range,
    }));

    return parsedData;
  }

  const employeeRangeOptions = mapToOptions(employeeRanges);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      const response = await contactService.createContact(data);

      logger.log("API response:", response);

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
  };
}