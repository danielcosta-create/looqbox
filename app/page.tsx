"use client";

import { Layout } from "antd";
import { LooqboxHeader, LooqboxFooter } from "@/shared/components";
import { HeroSection } from "@/features/marketing/components";
const { Content, Sider } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-dvh">
      <LooqboxHeader />
      <Content className="px-6 lg:px-16 py-16">
        <HeroSection />
      </Content>
      <LooqboxFooter />
    </Layout>
  );
}
