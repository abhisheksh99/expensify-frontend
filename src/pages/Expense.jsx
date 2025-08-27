import React from 'react';
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Expense = () => {
  useUser();

  return (
    <Dashboard activeMenu="Expense">
      {/* Expense page content */}
    </Dashboard>
  );
};

export default Expense;