import { createContext, useContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const budgetValue = { budgetMode, setBudgetMode };
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
