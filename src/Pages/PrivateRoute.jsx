import { Box, Text } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const [state, dispatch] = useContext(AuthContext);
  return (
    <Box>
      {state.isAuth ? (
        <Box textAlign="center">
          <Text fontSize="5xl">Register Succesfull</Text>
        </Box>
      ) : (
        <Box>
          {alert(" user not logged in")}
          <Navigate to="/register/one"></Navigate>
        </Box>
      )}
    </Box>
  );
};
