import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="flex p-[10px]">
        <div className="flex-1 rounded">
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
    </>
  );
};

export default Navbar;
