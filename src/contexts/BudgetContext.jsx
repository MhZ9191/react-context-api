import { createContext, useContext, useState } from "react";
const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const changeBudget = () => {
    setBudgetMode(budgetMode ? false : true);
  };

  const budgetValue = { budgetMode, changeBudget };
  return (
    <BudgetContext.Provider value={budgetValue}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
