import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Menu() {
  function revealMenu(e) {
    const links = document.querySelector(`.main-container`);
    e.target.style.display = `none`;
    links.classList.add(`animation`);
  }

  function closeMenu() {
    const icon = document.querySelector(`.menu`);
    const links = document.querySelector(`.main-container`);

    icon.style.display = `block`;
    links.classList.remove(`animation`);
  }
  return (
    <>
      <div className="cont flex">
        <div className="side-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[40px] cursor-pointer menu"
            onClick={revealMenu}
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <NavBar close={closeMenu} />
        </div>
        <div className="pages flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
