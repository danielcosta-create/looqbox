"use client";
import { Row, Col, Layout, Typography } from "antd";
import { LooqboxHeader, LooqboxFooter, ContactForm } from "@/components";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout className="min-h-dvh bg-purple-300">
      <LooqboxHeader />      

      <Content className="px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={1}>
                Transforme sua empresa com decisões baseadas em dados
              </Title>
              <Paragraph className="text-lg">
                Juntos, vamos além, construindo um futuro onde os dados são
                universais, acessíveis, descomplicados e impulsionadores do
                sucesso de cada colaborador da sua empresa.
              </Paragraph>
            </Col>

            <Col xs={24} lg={12}>
              <ContactForm /> 
            </Col>
          </Row>
        </div>
      </Content>

      <LooqboxFooter />
    </Layout>
  );
}