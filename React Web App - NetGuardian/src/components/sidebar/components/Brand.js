import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components

import { HSeparator } from "components/separator/Separator";
import netGuardian from "../../../assets/img/netguardian.png";

export function SidebarBrand() {


  return (
    <Flex align='center' direction='column'>
        <img src={netGuardian} height='30px' width='300px' alt="netguardian" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
