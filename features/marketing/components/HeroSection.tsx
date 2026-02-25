import { Row, Col, Typography } from "antd";
import { ContactForm } from "@/features/marketing/components";
const { Title, Paragraph } = Typography;

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={12}>
          <Title level={1}>
            Transforme sua empresa com decisões{" "}
            <span className="text-primary">baseadas em dados</span>
          </Title>
          <Paragraph className="text-lg text-secondary text-pretty">
            Juntos, vamos além, construindo um futuro onde os{" "}
            <span className="text-primary font-semibold">dados</span> são
            universais, acessíveis, descomplicados e impulsionadores do sucesso
            de cada colaborador da sua empresa.
          </Paragraph>
        </Col>

        <Col xs={24} lg={12}>
          <Title level={4}>Contato</Title>
          <Paragraph className="text-lg text-secondary text-pretty">
            Saiba mais sobre como a Looqbox pode ajudar sua empresa a se tornar
            mais orientada por dados.
          </Paragraph>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
}
