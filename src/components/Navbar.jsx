
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menu, close } from "../assets";
import { siteNavigation as nav } from "../constants";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-2 py-2 transition-colors ${
      isActive
        ? "text-white font-semibold border-b-[3px] border-emerald-400"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 backdrop-blur"
      style={{
        background:
          "linear-gradient(105deg, #032A23 0%, #075A40 48%, #087C65 100%)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-5 px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}M3TFluiD_Lab_logo_white_transparent.svg`}
            alt="M³TFluiD Lab"
            className="h-auto w-[210px] object-contain sm:w-[250px]"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 text-[15px] xl:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={
                  item.button
                    ? "rounded-full border border-emerald-400 px-5 py-2 text-white transition-colors hover:bg-emerald-400/10"
                    : linkClass
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="p-2 text-white xl:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          <img
            src={open ? close : menu}
            alt=""
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#00382F] shadow-xl xl:hidden"
        >
          <ul className="space-y-2 px-6 py-4">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={
                    item.button
                      ? "block rounded-full border border-emerald-400 px-5 py-2 text-center text-white transition-colors hover:bg-emerald-400/10"
                      : linkClass
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
