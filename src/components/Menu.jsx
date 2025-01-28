import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Menu({ count }) {
  function revealMenu() {
    window.addEventListener(`click`, (e) => {
      const menu = document.querySelector(`.main-container`);
      const menuIcon = document.querySelector(`.menu`);
      if (e.target.closest(`.menu`)) {
        menu.classList.add(`main-anim`);
        menuIcon.classList.add(`menu-anim`);
      } else {
        menu.classList.remove(`main-anim`);
        menuIcon.classList.remove(`menu-anim`);
      }
    });
  }

  revealMenu();

  return (
    <>
      <div className="cont flex flex-col">
        <div className="side-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(37,37,37,1)"
            className="w-[40px] cursor-pointer menu"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <NavBar count={count} />
          <div className="cart-count">{count}</div>
        </div>
        <div className="pages flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
