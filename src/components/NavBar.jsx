import { Link } from "react-router";
import { Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <div className="main-container">
        <nav className="nav-bar flex flex-col">
          <Link to={"/"}>Home</Link>
          <Link to={"/Shop"}>Shop</Link>
          <Link to={"/Cart"}>cart</Link>
        </nav>
        <div className="pages">
          <Outlet />
        </div>
      </div>
    </>
  );
}
