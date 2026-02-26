import { Layout, Typography } from "antd";
import { useLooqboxFooter } from "@/shared/hooks/useLooqboxFooter";
import Link from "next/link";

const { Footer } = Layout;
const { Paragraph } = Typography;

export function LooqboxFooter() {
  const { currentYear } = useLooqboxFooter();

  return (
    <Footer>
      <div className="md:px-8">
        <Paragraph className="text-center text-secondary mb-0!">
          {currentYear} Looqbox. Desenvolvido por{" "}
          <Link
            href="https://github.com/danielcosta-create"
            target="_blank"
            className="text-primary"
          >
            Daniel Costa
          </Link>
          .
        </Paragraph>
      </div>
    </Footer>
  );
}
