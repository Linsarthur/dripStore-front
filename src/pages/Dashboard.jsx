import Produtos from "./Produtos";
import Usuarios from "./Usuarios";

const Dashboard = () => {
  return (
    <div className="bg-gray-500/10">
      <Produtos />
      <Usuarios />
    </div>
  );
};

export default Dashboard;
