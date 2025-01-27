import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav className="main-container">
        <Link className="menu-link" to={"/"}>
          Home
        </Link>
        <Link className="menu-link" to={"/Shop"}>
          Shop
        </Link>
        <Link className="menu-link" to={"/Cart"}>
          cart
        </Link>
      </nav>
    </>
  );
}
