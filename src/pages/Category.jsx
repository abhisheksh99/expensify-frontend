import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Category = () => {
  useUser();
  return (
    <Dashboard activeMenu="Category">
      {/* Category page content */}
    </Dashboard>
  );
};

export default Category;