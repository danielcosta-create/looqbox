import { Layout, Typography } from "antd";
import { useLooqboxFooter } from "@/shared/hooks/useLooqboxFooter";

const { Footer } = Layout;
const { Paragraph } = Typography;

export function LooqboxFooter() {
  const { currentYear } = useLooqboxFooter();

  return (
    <Footer className="text-center">
      <Paragraph className="text-secondary">
        © {currentYear} Looqbox. Todos os direitos reservados.
      </Paragraph>
    </Footer>
  );
}
