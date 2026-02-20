import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <section className="sec-head">
          <div className="btn-head">
            <i className="bi bi-list"></i>
          </div>
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
        </section>
      </header>
    </>
  );
}
