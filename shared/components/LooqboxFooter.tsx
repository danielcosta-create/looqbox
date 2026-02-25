import { Layout, Typography } from "antd";
const { Footer } = Layout;
const { Paragraph } = Typography;

export function LooqboxFooter() {
  return (
    <Footer className="text-center">
      <Paragraph className="text-secondary">
        © {new Date().getFullYear()} Looqbox. Todos os direitos reservados.
      </Paragraph>
    </Footer>
  );
}
