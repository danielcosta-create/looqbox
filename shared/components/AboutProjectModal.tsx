import { Button, Modal, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

interface AboutProjectModalProps {
  open: boolean;
  onCancel: () => void;
}

export function AboutProjectModal({ open, onCancel }: AboutProjectModalProps) {
  return (
    <Modal
      title="Sobre o Projeto"
      open={open}
      onCancel={onCancel}
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
        cuida da interface, os hooks atuam como <strong>ViewModel</strong> e os
        services concentram as regras de negócio (<strong>Model</strong>).
      </Paragraph>

      <Paragraph>
        O código combina paradigmas funcional e orientado a objetos, aplicando
        princípios <strong>SOLID</strong>, com baixo acoplamento e inversão de
        dependência inspirados na filosofia da{" "}
        <strong>Clean Architecture</strong>.
      </Paragraph>

      <Paragraph>
        Inclui abstrações como <strong>HttpClient</strong> e{" "}
        <strong>Logger</strong>, com implementações concretas como{" "}
        <strong>FetchHttpClient</strong> e <strong>ConsoleLogger</strong>.
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
        className="mt-6"
      >
        Ver no GitHub
      </Button>
    </Modal>
  );
}
