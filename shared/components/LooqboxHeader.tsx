import Link from "next/link";
import { env } from "@/config/env";
import { Layout, Image } from "antd";
const { Header } = Layout;

export function LooqboxHeader() {
  return (
    <Header className="px-6 lg:px-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <Link
          target="_blank"
          href={env.NEXT_PUBLIC_LOOQBOX_URL}
          className="flex items-center text-2xl font-bold text-gray-800"
        >
          <Image
            src="/looqbox-logo.svg"
            alt="Looqbox"
            height={32}
            preview={false}
            className="mr-3"
          />
        </Link>
      </div>
    </Header>
  );
}
