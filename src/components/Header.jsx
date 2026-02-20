import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

export default function Header() {
  const { changeBudget, budgetMode } = useBudget();

  return (
    <>
      <header>
        <section className="sec-head">
          <div className="btn-head">
            <i className="bi bi-list"></i>
          </div>
          <div className="div-nav">
            <div className="div-head">
              <NavLink className="link-head" to="/">
                HOME
              </NavLink>
              <NavLink className="link-head" to="/about">
                ABOUT
              </NavLink>
              <NavLink className="link-head" to="/products">
                PRODUCTS
              </NavLink>
            </div>
            <button onClick={changeBudget} className="btn-budget">
              {budgetMode
                ? "Attiva Modalità Budget"
                : "Disattiva Modalità Budget"}
            </button>
          </div>
        </section>
      </header>
    </>
  );
}
