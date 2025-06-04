import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import logo from "../assets/Group.svg";
import Tables from "./Tables";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
   <>
    <div className="flex p-[10px]">
      {collapsed && (
        <div className="bg-white w-[250px] rounded p-[50px] flex flex-col items-center h-screen shadow-2xl">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <a
            href="#usuarios"
            className="flex mb-[10px] mt-[20px] gap-2 items-center text-black"
          >
            <UserOutlined />
            Usuários
          </a>
          <a
            href="#produtos"
            className="flex mb-[10px] mt-[10px] gap-2 items-center text-black"
          >
            <ProductOutlined />
            Produtos
          </a>
        </div>
      )}

      <div className="flex-1 rounded px-[10px]">
        <div className="flex justify-between items-center rounded px-[50px] py-[10px] bg-white shadow-md">
          <div className="flex items-center gap-5">
            <Button type="primary" onClick={handleClick}>
              {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
            <h2>Usuários</h2>
          </div>
          <div className="flex gap-5 items-center text-right">
            <div>
              <h5>Usuário da Silva</h5>
              <a href="#logout" className="font-bold ">
                Sair
              </a>
            </div>
            <Button type="primary" className="w-[30px]" shape="circle">
              U
            </Button>
          </div>
        </div>
      </div>
    </div>
      <Tables/>
   </>
  );
};

export default Navbar;
