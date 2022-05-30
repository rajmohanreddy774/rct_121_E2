
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



export const RegisterPageTwo = ()=>{
    const [ Address, setAddress] = useState("");
    const [ Number, setNumber] = useState("");
    const navigate = useNavigate();
   

    return (
        <Box border='1px solid black' margin='auto'textAlign='center' w='40%' p={5}  bg="#42f590" mt={10} >
            <Text mb={5} > RegistraionPageTwo</Text>
            <Input mb={5} placeholder="enter your address" onChange={(e)=>{setAddress(e.target.value)}}></Input>
            <Input mb={5} placeholder="enter your number" onChange={(e)=>{setNumber(e.target.value)}}></Input>
            <Link to='/register/one'> prev </Link>
            <Button ml={5} onClick={()=>{navigate('/private')}} >Submit</Button>
        </Box>
    )
}