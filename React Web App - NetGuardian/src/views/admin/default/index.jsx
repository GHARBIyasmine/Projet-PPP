

// Chakra imports
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import React from "react";

import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import PieCard2 from "views/admin/default/components/PieCard2";
import PieCard3 from "views/admin/default/components/PieCard3";

import {
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";


export default function UserReports() {
  // Chakra Color Mode
  //const brandColor = useColorModeValue("brand.500", "white");
  //const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
            columns={{ base: 1, md: 3, lg: 3, "2xl": 3 }}
            gap='20px'
            mb='20px'>
            <SimpleGrid>
                <MiniStatistics growth='88% attack type accuracy' name='Attack Prediction Accuracy' value='100%'  />
            </SimpleGrid>

        </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'>

          <PieCard />
          <PieCard2 />
          <PieCard3 />


      </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>

          <DailyTraffic />
          <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

      </SimpleGrid>
    </Box>
  );
}
