import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Popconfirm, Space, Table } from "antd";
import { useContext, useState } from "react";
import { useBuscar, useCriar, useDeletar, useEditar } from "../hooks/categoriaHooks";
import { AntContext } from './../contexts/AntContext';

const Categorias = () => {

    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const { api } = useContext(AntContext);
    const { data: categorias } = useBuscar();
    const { mutateAsync: criar } = useCriar();
    const { mutateAsync: editar } = useEditar();
    const { mutateAsync: deletar } = useDeletar();
    const [editForm] = Form.useForm();

    function onCriar(dados) {
        criar(dados, {
            onSuccess: (response) => {
                setVisibleCreate(false);
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            },
            onError: (response) => {
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            }
        });
    }

    function onEditar(dados) {
        editar(dados, {
            onSuccess: (response) => {
                setVisibleUpdate(false);
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            },
            onError: (response) => {
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            }
        });
    }

    function onDeletar(id) {
        deletar(id, {
            onSuccess: (response) => {
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            },
            onError: (response) => {
                api[response.tipo]({
                    message: "Aviso:",
                    description: response.mensagem
                })
            }
        });
    }

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
                        Novo categoria
                    </Button>
                </div>
            </div>

            <Table
                dataSource={categorias}
                rowKey={""}
                className="p-[10px]"
            >
                <Table.Column
                    title="Id"
                    dataIndex="categoria_id"
                    key="categoria_id"
                    className="w-[50px]"
                />
                <Table.Column
                    title="Nome"
                    dataIndex="categoria_nome"
                    key="categoria_nome"
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
                                        categoria_id: linha.categoria_id,
                                        categoria_nome: linha.categoria_nome
                                    });
                                    setVisibleUpdate(true);
                                }}
                            />
                            <Popconfirm
                                title="Aviso:"
                                description="Deseja realmente deletar?"
                                onConfirm={() => onDeletar(linha.categoria_id)}
                                okText="Sim"
                                cancelText="Não"
                            >
                                <DeleteOutlined
                                    className="text-[18px]"
                                />
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
                <Form
                    layout="vertical"
                    onFinish={onCriar}
                >
                    <Form.Item
                        label="Nome"
                        name={"categoria_nome"}
                        rules={[{ required: true, message: "Campo obrigatório" }]}
                    >
                        <Input placeholder="Nome da categoria" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Criar</Button>
                </Form>
            </Drawer>

            <Drawer
                open={visibleUpdate}
                onClose={() => setVisibleUpdate(false)}
                title={"Editar"}
            >
                <Form
                    layout="vertical"
                    onFinish={onEditar}
                    form={editForm}
                >
                    <Form.Item
                        name={"categoria_id"}
                        hidden
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nome"
                        name={"categoria_nome"}
                        rules={[{ required: true, message: "Campo obrigatório" }]}
                    >
                        <Input placeholder="Nome da categoria" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Editar</Button>
                </Form>
            </Drawer>
        </div>
    );
}

export default Categorias;