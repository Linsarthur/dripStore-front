import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Table } from "antd";

const Tables = () => {
  const data = [
    {
      key: "1",
      nome: "Arthur",
      email: "Arthur@teste.com",
      telefone: "88988888888",
      cpf: "000.000.000-00",
    },
  ];

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telefone",
      dataIndex: "telefone",
      key: "telefone",
    },
    {
      title: "Cpf",
      dataIndex: "cpf",
      key: "cpf",
    },
  ];

  const colunas = (
    <Select defaultValue="usuario_nome" style={{ width: 100 }}>
      <option value="usuario_nome">Nome</option>
      <option value="usuario_email">Email</option>
      <option value="usuario_telefone">Telefone</option>
      <option value="usuario_cpf">Cpf</option>
    </Select>
  );

  return (
    <>
      <div className="p-[10px] h-screen">
        <div className="flex justify-between mb-[10px]">
          <div className="w-[25%] flex ">
            <Input addonAfter={colunas} defaultValue="Teste" />
            <Button type="primary">
              <SearchOutlined />
            </Button>
          </div>
          <div className="text-center leading-[34px]">
            <Button type="primary">
              <PlusOutlined />
              Novo usuário
            </Button>
          </div>
        </div>
        <Table dataSource={data} columns={columns} className=""/>
      </div>
    </>
  );
};

export default Tables;
