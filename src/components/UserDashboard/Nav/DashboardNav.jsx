import React, { useState } from "react";
import { dashboardNavData } from "./dashboardNavData";
import DashboardNavItem from "./DashboardNavItem";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function DashboardNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(location.pathname);

  const handleChange = (event) => {
    navigate(event.target.value);
    setSelectedPage(event.target.value);
  };
  return (
    <div className='px-4'>
      {/* Main Nav */}
      <nav className='sm:flex items-center uppercase  gap-4 md:gap-10 justify-center mt-10'>
        {dashboardNavData.map((item) => (
          <DashboardNavItem item={item} key={item.title} />
        ))}
      </nav>
      {/* Mobile Nav */}
      <nav className='sm:hidden'>
        <FormControl>
          {/* <InputLabel id='navigation-label'>Select Page</InputLabel> */}
          <Select
            // labelId='navigation-label'
            id='navigation-select'
            value={selectedPage}
            onChange={handleChange}
            sx={{ width: "100%", textTransform: "uppercase" }}
          >
            {dashboardNavData.map((item) => (
              <MenuItem
                sx={{ textTransform: "uppercase", width: "100%" }}
                key={item.title}
                value={item.href}
              >
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </nav>
    </div>
  );
}

export default DashboardNav;
