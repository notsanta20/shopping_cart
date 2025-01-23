import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav className="flex">
        <div className="link-container flex-1 flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/Shop"}>Shop</Link>
        </div>
        <Link to={"/Cart"}>cart</Link>
      </nav>
    </>
  );
}
