import { CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const FormUser = ({ isOpen, isClosed }) => {
  return (
    <div
      onClick={isClosed}
      className={`fixed inset-0 bg-black/50 z-40 flex justify-end transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white h-full w-1/5 p-5 z-50 transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="my-[10px] border-b-[1px] border-[#c92871]/20 font-bold ">
          <h2 className="pb-3">
            <CloseOutlined
              className="mr-4 cursor-pointer hover:text-[#c92871] transition-colors"
              onClick={isClosed}
            />
            Novo Usuário
          </h2>
        </div>

        <div className="font-bold my-5 border-r-[1px] border-[#c92871]/20">
          <h2>Informações</h2>
        </div>

        <Form layout="vertical">
          <Form.Item
            label="Nome"
            name="usuario_nome"
            rules={[{ required: true, message: "Nome necessário" }]}
          >
            <Input placeholder="Seu nome aqui" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="usuario_email"
            rules={[{ required: true, message: "Email necessário!" }]}
          >
            <Input placeholder="email@email.com" />
          </Form.Item>

          <Form.Item
            label="Cpf"
            name="usuario_cpf"
            rules={[{ required: true, message: "Cpf necessário!" }]}
          >
            <Input placeholder="000.000.000-00" />
          </Form.Item>

          <Form.Item
            label="Telefone"
            name="usuario_telefone"
            rules={[{ required: true, message: "Telefone necessário!" }]}
          >
            <Input placeholder="(88)98888-8888" />
          </Form.Item>

          <Button type="primary">Enviar</Button>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;
