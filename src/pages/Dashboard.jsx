import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Form, Input, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import {
  useBuscar as useBuscarUsuarios,
  useCriar,
  useDeletar,
  useEditar,
} from "../hooks/usuarioHooks";

const Dashboard = () => {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const { data: usuarios } = useBuscarUsuarios();
  const { mutateAsync: criar } = useCriar();
  const { mutateAsync: editar } = useEditar();
  const { mutateAsync: deletar } = useDeletar();
  const [createForm] = Form.useForm();
  const [editForm] = Form.useForm();

  function onCriar(dados) {
    criar(dados, {
      onSuccess: (response) => {
        setVisibleCreate(false);
        createForm.resetFields();
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
      onError: (response) => {
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
    });
  }

  function onEditar(dados) {
    editar(dados, {
      onSuccess: (response) => {
        setVisibleUpdate(false);
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
      onError: (response) => {
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
    });
  }

  function onDeletar(id) {
    deletar(id, {
      onSuccess: (response) => {
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
      onError: (response) => {
        api[response.tipo]({
          message: "Aviso:",
          description: response.mensagem,
        });
      },
    });
  }

  return (
    <div>
      <div className="flex justify-between p-[10px]">
        <div className="w-[25%] flex ">
          <Space.Compact>
            <Input addonAfter={[]} defaultValue="Teste" />
            <Button type="primary">
              <SearchOutlined />
            </Button>
          </Space.Compact>
        </div>
        <div className="text-center leading-[34px]">
          <Button type="primary" onClick={() => setVisibleCreate(true)}>
            <PlusOutlined />
            Novo Usuário
          </Button>
        </div>
      </div>

      <Table dataSource={usuarios} rowKey={""}>
        <Table.Column title="Id" dataIndex="usuario_id" key="usuario_id" />
        <Table.Column
          title="Nome"
          dataIndex="usuario_nome"
          key="usuario_nome"
        />
        <Table.Column
          title="Email"
          dataIndex="usuario_email"
          key="usuario_email"
        />
        <Table.Column
          title="Senha"
          dataIndex="usuario_senha"
          key="usuario_senha"
        />

        <Table.Column
          title="Telefone"
          dataIndex="usuario_telefone"
          key="usuario_telefone"
        />
        <Table.Column title="Cpf" dataIndex="usuario_cpf" key="usuario_cpf" />
        <Table.Column
          title="Ações"
          className="w-[100px]"
          render={(_, linha) => (
            <div className="flex items-center justify-center gap-4">
              <EditOutlined
                className="text-[18px]"
                onClick={() => {
                  editForm.setFieldsValue({
                    usuario_id: linha.usuario_id,
                    usuario_nome: linha.usuario_nome,
                    usuario_email: linha.usuario_email,
                    usuario_senha: linha.usuario_senha,
                    usuario_telefone: linha.usuario_telefone,
                    usuario_cpf: linha.usuario_cpf,
                  });
                  setVisibleUpdate(true);
                }}
              />
              <Popconfirm
                title="Aviso:"
                description="Deseja realmente deletar?"
                onConfirm={() => onDeletar(linha.usuario_id)}
                okText="Sim"
                cancelText="Não"
              >
                <DeleteOutlined className="text-[18px]" />
              </Popconfirm>
            </div>
          )}
        />
      </Table>

      <Drawer
        open={visibleCreate}
        onClose={() => setVisibleCreate(false)}
        title={"Criar"}
      >
        <Form layout="vertical" onFinish={onCriar} form={createForm}>
          <Form.Item
            label="Nome"
            name={"usuario_nome"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Nome do usuário" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"usuario_email"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Insira o email" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name={"usuario_senha"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="*********" />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name={"usuario_telefone"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="(88)98888-8888" />
          </Form.Item>
          <Form.Item
            label="Cpf"
            name={"usuario_cpf"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="000.000.000-00" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Criar
          </Button>
        </Form>
      </Drawer>

      <Drawer
        open={visibleUpdate}
        onClose={() => setVisibleUpdate(false)}
        title={"Editar"}
      >
        <Form layout="vertical" onFinish={onEditar} form={editForm}>
          <Form.Item name={"usuario_id"} hidden>
            <Input />
          </Form.Item>
          <Form.Item
            label="Nome"
            name={"usuario_nome"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Nome do usuário" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"usuario_email"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Insira o email" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name={"usuario_senha"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="*********" />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name={"usuario_telefone"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="(88)98888-8888" />
          </Form.Item>
          <Form.Item
            label="Cpf"
            name={"usuario_cpf"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="000.000.000-00" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Editar
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default Dashboard;
