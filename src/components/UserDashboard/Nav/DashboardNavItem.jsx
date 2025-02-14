import React from "react";
import { NavLink } from "react-router-dom";

function DashboardNavItem({ item }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive
            ? ""
            : "text-stone-400 hover:text-black hover:underline duration-300"
        } `
      }
      to={item.href}
    >
      {item.title}
    </NavLink>
  );
}

export default DashboardNavItem;
