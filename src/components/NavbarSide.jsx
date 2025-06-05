import { ProductOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import logo from "../assets/Group.svg";

const NavbarSide = () => {
  return (
    <div className={``}>
      <div className="bg-white w-[250px] h-screen rounded p-[50px] flex flex-col items-center shadow-2xl mr-[10px]">
        <img src={logo} alt="Logo" className="w-[100px]" />
        <Link
          to="/dashboard"
          href="#usuarios"
          className="flex mb-[10px] mt-[20px] gap-2 items-center text-black"
        >
          <UserOutlined />
          Usuários
        </Link>
        <Link
          to="/dashboard/produtos"
          className="flex mb-[10px] mt-[10px] gap-2 items-center text-black"
        >
          <ProductOutlined />
          Produtos
        </Link>
        <Link
          to="/dashboard/categorias"
          className="flex mb-[10px] mt-[10px] gap-2 items-center text-black"
        >
          <ProductOutlined />
          Categorias
        </Link>
        <Link
          to="/dashboard/marcas"
          className="flex mb-[10px] mt-[10px] gap-2 items-center text-black"
        >
          <ProductOutlined />
          Marcas
        </Link>
      </div>
    </div>
  );
};

export default NavbarSide;
