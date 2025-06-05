import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import {
    Button,
    Drawer,
    Form,
    Input,
    Popconfirm,
    Select,
    Space,
    Table,
} from "antd";
import { useState } from "react";
import {
    useBuscar,
    useCriar,
    useDeletar,
    useEditar,
} from "../hooks/produtoHooks";
import { useBuscar as useBuscarCategorias } from "./../hooks/categoriaHooks";
import { useBuscar as useBuscarMarcas } from "./../hooks/marcaHooks";

const Produtos = () => {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const { data: produtos } = useBuscar();
  const { mutateAsync: criar } = useCriar();
  const { mutateAsync: editar } = useEditar();
  const { mutateAsync: deletar } = useDeletar();
  const [createForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const { data: marcas, isFetched: carregouMarcas } = useBuscarMarcas();
  const { data: categorias, isFetched: carregouCategorias } =
    useBuscarCategorias();

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
            Novo produto
          </Button>
        </div>
      </div>

      <Table dataSource={produtos} rowKey={""}>
        <Table.Column title="Id" dataIndex="produto_id" key="produto_id" />
        <Table.Column
          title="Nome"
          dataIndex="produto_nome"
          key="produto_nome"
        />
        <Table.Column
          title="Preço"
          dataIndex="produto_preco"
          key="produto_preco"
        />
        <Table.Column
          title="Desconto"
          dataIndex="produto_desconto"
          key="produto_desconto"
        />
        <Table.Column
          title="Imagem"
          dataIndex="produto_imagem"
          key="produto_imagem"
        />
        <Table.Column title="Marca ID" dataIndex="marca_id" key="marca_id" />
        <Table.Column
          title="Categoria ID"
          dataIndex="categoria_id"
          key="categoria_id"
        />
        <Table.Column
          title="Ações"
          className="w-[100px]"
          render={(_, linha) => (
            <div className="flex items-center justify-center gap-4">
              <EditOutlined
                className="text-[18px]"
                onClick={() => {
                  editForm.setFieldsValue({
                    marca_id: linha.marca_id,
                    marca_nome: linha.marca_nome,
                  });
                  setVisibleUpdate(true);
                }}
              />
              <Popconfirm
                title="Aviso:"
                description="Deseja realmente deletar?"
                onConfirm={() => onDeletar(linha.marca_id)}
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
            name={"produto_nome"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Nome do produto" />
          </Form.Item>
          <Form.Item
            label="Preço"
            name={"produto_preco"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Preço do produto" type="number" />
          </Form.Item>
          <Form.Item
            label="Desconto"
            name={"produto_desconto"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Desconto do produto" />
          </Form.Item>
          <Form.Item
            label="Imagem"
            name={"produto_imagem"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Imagem do produto" />
          </Form.Item>

          <Form.Item
            label="Marca"
            name={"marca_id"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Select
              options={
                carregouMarcas
                  ? marcas.map((marca) => {
                      return {
                        value: marca.marca_id,
                        label: marca.marca_nome,
                      };
                    })
                  : []
              }
            />
          </Form.Item>
          <Form.Item
            label="Categoria"
            name={"categoria_id"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Select
              options={
                carregouCategorias
                  ? categorias.map((categoria) => {
                      return {
                        value: categoria.categoria_id,
                        label: categoria.categoria_nome,
                      };
                    })
                  : []
              }
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">Criar</Button>
        </Form>
      </Drawer>
      <Drawer
        open={visibleUpdate}
        onClose={() => setVisibleUpdate(false)}
        title={"Editar"}
      >
        <Form layout="vertical" onFinish={onEditar} form={createForm}>
          <Form.Item
            label="Nome"
            name={"produto_nome"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Nome do produto" />
          </Form.Item>
          <Form.Item
            label="Preço"
            name={"produto_preco"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Preço do produto" />
          </Form.Item>
          <Form.Item
            label="Desconto"
            name={"produto_desconto"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Desconto do produto" />
          </Form.Item>
          <Form.Item
            label="Imagem"
            name={"produto_imagem"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Imagem do produto" />
          </Form.Item>

          <Form.Item
            label="Marca"
            name={"marca_id"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Select
              options={
                carregouMarcas
                  ? marcas.map((marca) => {
                      return {
                        value: marca.marca_id,
                        label: marca.marca_nome,
                      };
                    })
                  : []
              }
            />
          </Form.Item>
          <Form.Item
            label="Categoria"
            name={"categoria_id"}
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Select
              options={
                carregouCategorias
                  ? categorias.map((categoria) => {
                      return {
                        value: categoria.categoria_id,
                        label: categoria.categoria_nome,
                      };
                    })
                  : []
              }
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">Editar</Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default Produtos;
