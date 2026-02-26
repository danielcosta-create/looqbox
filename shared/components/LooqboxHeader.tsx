"use client";

import Link from "next/link";
import { env } from "@/config/env";
import { Layout, Button, Image } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { AboutProjectModal } from "@/shared/components";
import { useAboutProjectModal } from "@/shared/hooks/useAboutProjectModal";

const { Header } = Layout;

export function LooqboxHeader() {
  const { open, handleOpen, handleClose } = useAboutProjectModal();

  return (
    <>
      <Header>
        <div className="flex justify-between items-center md:px-8">
          <Link
            target="_blank"
            href={env.NEXT_PUBLIC_LOOQBOX_URL}
            className="flex items-center"
          >
            <Image
              src="/looqbox-logo.svg"
              alt="Looqbox"
              height={32}
              preview={false}
            />
          </Link>

          <Button icon={<InfoCircleOutlined />} onClick={handleOpen}>
            Detalhes
          </Button>
        </div>
      </Header>

      <AboutProjectModal open={open} onCancel={handleClose} />
    </>
  );
}
