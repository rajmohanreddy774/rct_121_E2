import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box borderBottom="2px solid black" 
    bg="#42f590" textAlign="center">

      <Link to="/dashboard">
          <Text color="black">Home Page</Text>
        <Text color="black">click  to go to Dashboard</Text>
        <Text fontSize="5xl" color="black">
          Dashboard
        </Text>
      </Link>
    </Box>
  );
};
