import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>blog!</h1>
        <nav>
          <NavLink
            to="/"
            end
          >
            Blog
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/articles"
            end
          >
            articles
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
