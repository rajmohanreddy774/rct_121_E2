import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPageOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box
      border="1px solid black"
      margin="auto"
      textAlign="center"
      w="50%"
      p={5}
      bg="#42f590"
    >
      <Text mb={5}>RegistraionPageOne</Text>
      <Input
        mb={5}
        placeholder="Enter your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></Input>
      <Input
        mb={5}
        placeholder="Enter your Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Input>
      <Link to="/register/two"> Next </Link>
    </Box>
  );
};
