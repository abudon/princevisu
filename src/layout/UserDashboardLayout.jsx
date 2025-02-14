import DashboardNav from "../components/UserDashboard/Nav/DashboardNav";
import { Outlet } from "react-router-dom";

function UserDashboardLayout() {
  return (
    <>
      <DashboardNav />
      <Outlet />
    </>
  );
}

export default UserDashboardLayout;
