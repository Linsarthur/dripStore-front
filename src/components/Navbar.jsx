import { MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Navbar = () => {
  return (
    <>
      <div className="rounded p-[10px]">
        <div className=" flex justify-between items-center rounded px-[50px] py-[10px] bg-white">
          <div className="flex items-center gap-5">
            <Button type="primary">
              <MenuFoldOutlined />
            </Button>
            <h2>Usuários</h2>
          </div>
          <div className="flex gap-5 items-center text-right">
            <div>
              <h5>Usuário da silva</h5>
              <a href="" className="font-bold">
                Sair
              </a>
            </div>
            <Button
              type="primary"
              className="w-[30px]"
              shape="circle"
            >
              U
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
