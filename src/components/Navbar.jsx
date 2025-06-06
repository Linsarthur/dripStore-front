import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";
import { AntContext } from "../contexts/AntContext";
import { useNavigate } from "react-router";

const Navbar = () => {

  const { collapsed, setCollapsed } = useContext(AntContext);
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  const navigate = useNavigate();

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <>
      <div className="flex p-[10px]">
        <div className="flex-1 rounded">
          <div className="flex justify-between items-center rounded px-[50px] py-[10px] bg-white shadow-md">
            <div className="flex items-center gap-5">
              <Button
                type="primary"
                className="lg:!hidden"
                onClick={handleClick}
              >
                {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              </Button>
              <h2 className="font-bold text-xl">Usuários</h2>
            </div>
            <div className="flex gap-5 items-center text-right">
              <div>
                <h5>{usuario.usuario_nome}</h5>
                <div
                  className="font-bold cursor-pointer"
                  onClick={logout}
                >
                  Sair
                </div>
              </div>
              <Button type="primary" className="w-[30px]" shape="circle">
                {usuario.usuario_nome[0]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
