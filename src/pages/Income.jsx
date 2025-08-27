import React from 'react'
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Income = () => {
  useUser();

  return (
    <Dashboard activeMenu="Income">
      {/* Income page content */}
    </Dashboard>
  );
}

export default Income