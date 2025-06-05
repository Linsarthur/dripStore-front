import { ProductOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../assets/Group.svg";

const NavbarSide = ({ collapsed, setCollapsed }) => {
  return (
    <div className="fixed top-0 left-0">
      {collapsed && (
        <div className="bg-white w-[250px] rounded p-[50px] flex flex-col items-center shadow-2xl mr-[10px]">
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
    </div>
  );
};

export default NavbarSide;
