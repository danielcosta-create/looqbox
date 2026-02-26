"use client";

import Link from "next/link";
import { env } from "@/config/env";
import { Layout, Image, Button, Modal, Typography } from "antd";
import { useLooqboxHeader } from "@/shared/hooks/useLooqboxHeader";
import { InfoCircleOutlined, GithubOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Paragraph } = Typography;

export function LooqboxHeader() {
  const { open, setOpen } = useLooqboxHeader();

  return (
    <>
      <Header>
        <div className="px-4 lg:px-16 flex items-center justify-between w-full max-w-7xl mx-auto h-16">
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

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => setOpen(true)}
          >
            Detalhes
          </Button>
        </div>
      </Header>

      <Modal
        title="Sobre o Projeto"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
      >
        <Paragraph>
          Este projeto implementa um formulário de contato com arquitetura
          modular, separando <strong>features</strong> e módulos compartilhados
          para garantir organização e escalabilidade.
        </Paragraph>

        <Paragraph>
          A estrutura se inspira no padrão <strong>MVVM</strong>: a camada de UI
          cuida da interface, os hooks atuam como <strong>ViewModel</strong> e
          os services concentram as regras de negócio (<strong>Model</strong>).
        </Paragraph>

        <Paragraph>
          O código combina paradigmas funcional e orientado a objetos,
          aplicando princípios <strong>SOLID</strong>, com baixo acoplamento e
          inversão de dependência inspirados na filosofia da{" "}
          <strong>Clean Architecture</strong>.
        </Paragraph>

        <Paragraph>
          Inclui abstrações como <strong>HttpClient</strong> e{" "}
          <strong>Logger</strong>, com implementações concretas como{" "}
          <strong>FetchHttpClient</strong> e{" "}
          <strong>ConsoleLogger</strong>.
        </Paragraph>

        <Paragraph>
          Stack utilizada: <strong>Ant Design</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Zod</strong>,{" "}
          <strong>React Hook Form</strong>, <strong>TailwindCSS</strong>,{" "}
          <strong>ESLint</strong> e <strong>Prettier</strong>.
        </Paragraph>

        <Paragraph>
          O foco principal é manter responsabilidades bem definidas e código
          limpo, priorizando clareza, manutenção e escalabilidade.
        </Paragraph>

        <Button
          type="primary"
          icon={<GithubOutlined />}
          href="https://github.com/danielcosta-create/looqbox"
          target="_blank"
          block
        >
          Ver no GitHub
        </Button>
      </Modal>
    </>
  );
}