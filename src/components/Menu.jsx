import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Menu() {
  function revealMenu() {
    window.addEventListener(`click`, (e) => {
      const menu = document.querySelector(`.main-container`);
      if (e.target.closest(`.menu`)) {
        menu.style.display = `flex`;
      } else {
        menu.style.display = `none`;
      }
    });
  }

  function closeMenu() {
    window.addEventListener(`click`, (e) => {
      const menu = document.querySelector(`.main-container`);
      if (!e.target.closest(`.menu`)) {
        menu.style.display = `none`;
      }
    });
  }

  revealMenu();

  return (
    <>
      <div className="cont flex">
        <div className="side-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(37,37,37,1)"
            className="w-[40px] cursor-pointer menu"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <NavBar />
        </div>
        <div className="pages flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
