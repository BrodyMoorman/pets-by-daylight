import { VStack, Text, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'


export default function SignUpForm() {
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [inputs, setInputs] = useState({
        email: "",
        first: "",
        last: "",
        password: "",
        confirm: ""
    })
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
  return (
    <VStack w={"75%"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"semibold"} mb={6}>Sign Up</Text>
        <HStack w={"full"} justifyContent={"space-between"}>
            <FormControl isInvalid={isErrorEmail}>
                <FormLabel>First Name</FormLabel>
                <Input type='text' name='first' placeholder='John' value={inputs.first} onChange={handleInputChange} />
            </FormControl>
            <FormControl isInvalid={isErrorEmail}>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' name='last' placeholder='Doe' value={inputs.last} onChange={handleInputChange} />
            </FormControl>
        </HStack>
        <FormControl isInvalid={isErrorEmail}>
            <FormLabel>Email</FormLabel>
            <Input type='email' name='email' placeholder='john@example.com' value={inputs.email} onChange={handleInputChange} />
            {isErrorEmail && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isErrorEmail}>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' placeholder='password' value={inputs.password} onChange={handleInputChange} />
            <FormHelperText>Passwords must be at least 8 characters, contain an uppercase letter, lowercase letter, and a number.</FormHelperText>
        </FormControl>
        <FormControl isInvalid={isErrorEmail}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' name='confirm' placeholder='password' value={inputs.confirm} onChange={handleInputChange} />
        </FormControl>
        <Button colorScheme='purple' w={"full"} mt={4}>Sign Up</Button>
    </VStack>
  )
}
