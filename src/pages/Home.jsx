import { Button, Form, Input } from "antd";
import logo from "../assets/Group.png";
import tenisCosta from "../assets/tenis-costa.png";
import tenisFrente from "../assets/tenis-frente.png";

const Home = () => {
  function onLogin(data) {
    console.log(data);
  }

  return (
    <>
      <div className="flex items-center justify-around h-screen w-screen bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF]">
        <div className="w-full md:w-[300px] bg-white border-[1px] border-gray-500/10 rounded px-[20px] shadow-2xl">
          <div className="flex flex-col items-center gap-5 pt-[50px]">
            <img src={logo} alt="" className="block w-[33px] h-[33px]" />
            <h1 className="mb-[20px]">Bem vindo(a)</h1>
          </div>
          <Form layout="vertical" onFinish={onLogin}>
            <Form.Item
              label="Email"
              name="usuario_email"
              rules={[{ required: true, message: "Email necessário!" }]}
            >
              <Input placeholder="email@email.com" />
            </Form.Item>
            <Form.Item
              label="Senha"
              name="usuario_senha"
              rules={[{ required: true, message: "Senha necessária!" }]}
            >
              <Input.Password placeholder="********" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full my-6">
              Entrar
            </Button>
          </Form>
        </div>
        <div className="flex">
          <img
            src={tenisFrente}
            alt="tenis de frente"
            className="w-[45%] h-[45%]"
          />
          <img
            src={tenisCosta}
            alt="tenis de costas"
            className="w-[45%] h-[45%] mt-[50px]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
