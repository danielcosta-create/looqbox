import { Layout, Image } from "antd";
import { env } from "@/config/env";
const { Header } = Layout;

export function LooqboxHeader() {
    return (
        <Header className="bg-white px-6 lg:px-16 flex items-center">
            <div className="w-full max-w-7xl mx-auto">
                <a
                    href={env.LOOKBOX_URL}
                    className="flex items-center text-2xl font-bold text-gray-800"
                >
                    <Image src="/looqbox-logo.svg" alt="Looqbox" height={32} preview={false} className="mr-3" />
                </a>
            </div>
        </Header>
    );
}
