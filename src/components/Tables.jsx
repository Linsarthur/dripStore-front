import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Select, Space, Table } from "antd";
import { useState } from "react";
import FormUser from "./FormUser";

const Tables = () => {
  const [openModal, setOpenModal] = useState(false);

  const data = [
    {
      key: "1",
      nome: "Arthur",
      email: "Arthur@teste.com",
      telefone: "88988888888",
      cpf: "000.000.000-00",
      acoes: [
        <Button type="primary" shape="circle" className="mr-2">
          <EyeOutlined />
        </Button>,
        <Button type="primary" shape="circle" className="mr-2">
          <EditOutlined />
        </Button>,
        <Button type="primary" shape="circle" className="mr-2">
          <DeleteOutlined />
        </Button>,
      ],
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
    {
      title: "Ações",
      dataIndex: "acoes",
      key: "acoes",
    },
  ];

  const colunas = (
    <Select defaultValue="usuario_nome" className="w-[100px]">
      <Select.Option value="usuario_nome">Nome</Select.Option>
      <Select.Option value="usuario_email">Email</Select.Option>
      <Select.Option value="usuario_telefone">Telefone</Select.Option>
      <Select.Option value="usuario_cpf">Cpf</Select.Option>
    </Select>
  );

  return (
    <>

      <div className="p-[10px] flex-1">
        <div className="flex justify-between mb-[10px]">
          <div className="w-[25%] flex ">
            <Space.Compact>
              <Input addonAfter={colunas} defaultValue="Teste" />
              <Button type="primary">
                <SearchOutlined />
              </Button>
            </Space.Compact>
          </div>
          <div className="text-center leading-[34px]">
            <Button type="primary" onClick={() => setOpenModal(true)}>
              <PlusOutlined />
              Novo usuário
            </Button>
          </div>
        </div>
        <Table dataSource={data} columns={columns} className="" />
      </div>
      <FormUser isOpen={openModal} isClosed={() => { setOpenModal(!openModal) }} />
    </>
  );
};

export default Tables;
