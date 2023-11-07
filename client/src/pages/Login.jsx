import { Box, HStack, Center, Text, VStack, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import React from 'react'
import logInImage from '../assets/logInImage.jpg'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <Center w={"100vw"} h="100vh" bg={"#E7e7e7"}  >
        <HStack w="1200px" h={"650px"} gap={0} borderRadius={"2xl"} shadow={"2xl"}>
            <Center w={"50%"} h={"full"} bg="blue" backgroundImage={logInImage} backgroundPosition={"center"} backgroundSize={"cover"}  borderLeftRadius={"inherit"}>
                <Center w={'full'} h={"full"} bg={"rgb(0,0,0,0.45)"} borderLeftRadius={"inherit"} flexDirection={"column"}>
                <Text color={'white'} fontSize={"8xl"} fontWeight={'bold'} textAlign={"center"} lineHeight={"80px"} >Welcome Back!</Text>
                <Text fontSize={"lg"} color={'white'} textAlign={"center"} w={"80%"} pt={4}>Hope you're having a good day! Log back in to see what new pets are available for adoption in your area.</Text>
                <HStack color={"white"} pt={4}><Text>Don't have an account?</Text><ChakraLink as={ReactRouterLink} to='/register'>Sign Up</ChakraLink></HStack>
                </Center>
            </Center>
            <Center w={"50%"} h={"full"} bg={"white"} p={4} borderRightRadius={"inherit"}>
                <LoginForm />
            </Center>
        </HStack>

    </Center>
  )
}
