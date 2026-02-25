"use client";

import { Form, Input, Select, Button, Row, Col } from "antd";
import { Controller } from "react-hook-form";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const { 
    control, 
    handleSubmit, 
    errors, 
    onSubmit, 
    loading, 
    employeeRangeOptions 
} = useContactForm();

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label="First Name"
            validateStatus={errors.firstName ? "error" : ""}
            help={errors.firstName?.message}
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Last Name"
            validateStatus={errors.lastName ? "error" : ""}
            help={errors.lastName?.message}
          >
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Job Title"
            validateStatus={errors.jobTitle ? "error" : ""}
            help={errors.jobTitle?.message}
          >
            <Controller
              name="jobTitle"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Phone"
            validateStatus={errors.phone ? "error" : ""}
            help={errors.phone?.message}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => <Input {...field} />}
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
                <Input type="email" {...field} />
              )}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Company"
            validateStatus={errors.company ? "error" : ""}
            help={errors.company?.message}
          >
            <Controller
              name="company"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            label="Employee Range"
            validateStatus={errors.employeeRange ? "error" : ""}
            help={errors.employeeRange?.message}
          >
            <Controller
              name="employeeRange"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select"
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
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}