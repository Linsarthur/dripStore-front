import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Select, Space, Table } from "antd";
import { useState } from "react";
import { useBuscarProdutos } from "../hooks/produtoHooks";
import { useBuscar as useBuscarMarcas } from './../hooks/marcaHooks';
import { useBuscar as useBuscarCategorias } from './../hooks/categoriaHooks';

const Produtos = () => {

    const [visibleCreate, setVisibleCreate] = useState(false);
    const { data: produtos } = useBuscarProdutos();
    const { data: marcas, isFetched: carregouMarcas } = useBuscarMarcas();
    const { data: categorias, isFetched: carregouCategorias } = useBuscarCategorias();

    return (
        <div>
            <div className="flex justify-between p-[10px]">
                <div className="w-[25%] flex ">
                    <Space.Compact>
                        <Input
                            addonAfter={[]}
                            defaultValue="Teste"
                        />
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

            <Table
                dataSource={produtos}
                rowKey={""}
            >
                <Table.Column
                    title="Id"
                    dataIndex="produto_id"
                    key="produto_id"
                />
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
            </Table>

            <Drawer
                open={visibleCreate}
                onClose={() => setVisibleCreate(false)}
                title={"Criar"}
            >
                <Form
                    layout="vertical"
                >
                    <Form.Item
                        label="Nome"
                        name={"produto_nome"}
                        rules={[{ required: true, message: "Campo obrigatório" }]}
                    >
                        <Input placeholder="Nome do produto" />
                    </Form.Item>
                    <Form.Item
                        label="Marca"
                        name={"marca_id"}
                        rules={[{ required: true, message: "Campo obrigatório" }]}
                    >
                        <Select
                            options={
                                carregouMarcas ? marcas.map(marca => {
                                    return {
                                        value: marca.marca_id,
                                        label: marca.marca_nome
                                    }
                                }) : []
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
                                carregouCategorias ? categorias.map(categoria => {
                                    return {
                                        value: categoria.categoria_id,
                                        label: categoria.categoria_nome
                                    }
                                }) : []
                            }
                        />
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    );
}

export default Produtos;