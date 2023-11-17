import { VStack, Text, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function LoginForm(props) {
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
  return (
    <VStack w={"75%"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"semibold"} mb={6}>Log In {props.name}</Text>
        <FormControl isInvalid={isErrorEmail}>
            <FormLabel>Email</FormLabel>
            <Input type='email' name='email' placeholder='john@example.com' value={inputs.email} onChange={handleInputChange} />
            {isErrorEmail && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isErrorEmail}>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' placeholder='password' value={inputs.password} onChange={handleInputChange} />
        </FormControl>
        <Button colorScheme='purple' w={"full"} mt={4}>Log In</Button>
    </VStack>
  )
}
