import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/dataTables";




const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },

  {
    name: "Packet History",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/packet-history",
    component: DataTables,
  },

];

export default routes;
