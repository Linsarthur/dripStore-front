import { Button, Form, Input } from "antd";
import logo from "../assets/Group.png";
import tenisCosta from "../assets/tenis-costa.png";
import tenisFrente from "../assets/tenis-frente.png";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-around h-screen w-screen bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF]">
        <div className="border-[1px] border-gray-500/10 rounded px-[20px] shadow-2xl">
          <div className="flex flex-col items-center gap-5 pt-[50px]">
            <img src={logo} alt="" className="block w-[33px] h-[33px]" />
            <h1 className="mb-[20px]">Bem vindo(a)</h1>
          </div>
          <Form name="basic" style={{ width: 300, height: 150 }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email necessário!" }]}
            >
              <Input style={{ marginLeft: 5, width: 193 }} />
            </Form.Item>
            <Form.Item
              style={{ width: 255 }}
              label="Senha"
              name="password"
              rules={[{ required: true, message: "Senha necessária!" }]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
          <Form.Item label={null} className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              color="pink"
              variant="solid"
              style={{ width: 250 }}
            >
              Entrar
            </Button>
          </Form.Item>
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
