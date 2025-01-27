import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav className="main-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/Shop"}>Shop</Link>
        <Link to={"/Cart"}>cart</Link>
      </nav>
    </>
  );
}
