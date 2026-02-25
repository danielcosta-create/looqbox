import { Layout, Typography } from "antd";
const { Footer } = Layout;
const { Paragraph } = Typography;

export function LooqboxFooter() {
    return (
        <Footer className="text-center">
            <Paragraph>
            © {new Date().getFullYear()} Looqbox. All rights reserved.
            </Paragraph>
        </Footer>
    )
}