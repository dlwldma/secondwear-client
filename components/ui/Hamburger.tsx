"use client";
import { useRef, useState } from "react";

export default function Hamburger() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);
  const activeHamburger = (e: React.MouseEvent) => {
    if (buttonRef.current?.classList.contains("is-active")) {
      buttonRef.current?.classList.remove("is-active");
      setIsActive(false);
    } else {
      buttonRef.current?.classList.add("is-active");
      setIsActive(true);
    }
  };
  return (
    <div className="relative">
      <button
        className="hamburger hamburger--collapse-r"
        onClick={activeHamburger}
        type="button"
        ref={buttonRef}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {isActive ? (
        <>
          <div
            className="slide-in-top absolute top-[38px] left-[0px] z-10 
            w-screen rounded-[40px] p-7
            bg-gray-200"
          >
            <p>
              <a href="/">Inicio</a>
            </p>
            <p>
              <a href="/products">Productos</a>
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
