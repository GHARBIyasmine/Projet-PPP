import { useReducer, useEffect } from "react";
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import axios from 'axios';

const initialOptions = {
  labels: ["Normal", "Attack"],
  colors: ["#4318FF", "#6AD2FF"],
};

const initialState = {
  pieChartData: [0, 0],
  pieChartOptions: initialOptions,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PIE_CHART_DATA":
      return {
        ...state,
        pieChartData: action.payload,
      };
    default:
      return state;
  }
};

function PieCard(props) {
  const { ...rest } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axios.get("http://20.242.208.10/get/historique");
        let attackCount = 0;
        response.data.forEach(packet => {
          if (packet.state !== "normal") {
            attackCount++;
          }
        });
        const pieChartData = [(response.data.length - attackCount)/response.data.length*100, attackCount/response.data.length*100];  
        dispatch({ type: "SET_PIE_CHART_DATA", payload: pieChartData });
        console.log(pieChartData);
      } catch (error) {
        console.error(`Failed to fetch history data: ${error}`);
      }
    };

    fetchHistoryData();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'
      >
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Your Pie Chart
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>

      <PieChart
        chartData={state.pieChartData}
        chartOptions={state.pieChartOptions}
        height='200' 
      />

      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Normal
            </Text>
          </Flex>
        </Flex>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Attack
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Card>
  );
}

export default PieCard;
