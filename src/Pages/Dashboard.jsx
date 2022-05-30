import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Box
      border="1px solid black"
      margin="auto"
      textAlign="center"
      mt={10}
      w="80%"
      p={5}
      bg="#42f590"
    >
      <Flex>
      
         <h1 font-size="30px">DashBoard</h1>
        <Box border="2px solid blue"  textAlign="center" m={10} w="50%" p={5}>
         
          <Link to="/register/one">Register</Link>
        </Box>
      </Flex>
    </Box>
  );
};

