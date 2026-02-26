"use client";

import { Form, Input, Select, Button, Row, Col } from "antd";
import { Controller } from "react-hook-form";
import { useContactForm } from "@/features/marketing/hooks/useContactForm";

export function ContactForm() {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    employeeRangeOptions,
    isValid,
  } = useContactForm();

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Nome"
            validateStatus={errors.firstName ? "error" : ""}
            help={errors.firstName?.message}
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input placeholder="Digite seu nome" {...field} />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Sobrenome"
            validateStatus={errors.lastName ? "error" : ""}
            help={errors.lastName?.message}
          >
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input placeholder="Digite seu sobrenome" {...field} />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Cargo"
            validateStatus={errors.jobTitle ? "error" : ""}
            help={errors.jobTitle?.message}
          >
            <Controller
              name="jobTitle"
              control={control}
              render={({ field }) => (
                <Input placeholder="Ex: Gerente de Vendas" {...field} />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Telefone"
            validateStatus={errors.phone ? "error" : ""}
            help={errors.phone?.message}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="(11) 98765-4321"
                  maxLength={15}
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    let formatted = value;
                    if (value.length > 10) {
                      formatted = value.replace(
                        /(\d{2})(\d{5})(\d{4})/,
                        "($1) $2-$3",
                      );
                    } else if (value.length > 6) {
                      formatted = value.replace(
                        /(\d{2})(\d{4})(\d{0,4})/,
                        "($1) $2-$3",
                      );
                    } else if (value.length > 2) {
                      formatted = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
                    } else if (value.length > 0) {
                      formatted = value.replace(/(\d{0,2})/, "($1");
                    }
                    field.onChange(formatted);
                  }}
                />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="seuemail@empresa.com.br"
                  {...field}
                />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Empresa"
            validateStatus={errors.company ? "error" : ""}
            help={errors.company?.message}
          >
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Input placeholder="Nome da sua empresa" {...field} />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            label="Número de Funcionários"
            validateStatus={errors.employeeRange ? "error" : ""}
            help={errors.employeeRange?.message}
          >
            <Controller
              name="employeeRange"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Selecione o número de funcionários"
                  options={employeeRangeOptions}
                />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            disabled={!isValid || loading}
            className="mt-4"
          >
            Enviar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
