import { Box, HStack, Center, Text, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import SignUpForm from '../components/SignUpForm'
import signUpImage from '../assets/signUpImage.jpg'

export default function Register() {
  return (
    <Center w={"100vw"} h="100vh" backgroundColor={"#F7C7DB"} >
        <HStack w="1200px" h={"650px"} gap={0} borderRadius={"2xl"} shadow={"2xl"}>
            <Center w={"50%"} h={"full"} bg={"white"} p={4} borderLeftRadius={"inherit"}>
                <SignUpForm />
            </Center>
            <Center w={"50%"} h={"full"} bg="blue" backgroundImage={signUpImage} backgroundPosition={"center"} backgroundSize={"110%"}  borderRightRadius={"inherit"}>
                <Center w={'full'} h={"full"} bg={"rgb(0,0,0,0.45)"} borderRightRadius={"inherit"} flexDirection={"column"}>
                <Text color={'white'} fontSize={"8xl"} fontWeight={'bold'} textAlign={"center"} lineHeight={"80px"} >Almost There!</Text>
                <Text fontSize={"lg"} color={'white'} textAlign={"center"} w={"80%"} pt={4}>You're one step closer to bringing home the newest member of your family. Sign up to get access to adoption listings for furry friends in your area.</Text>
                <HStack color={"white"} pt={4}><Text>Already have an account?</Text><Link>Log in.</Link></HStack>
                </Center>
            </Center>
        </HStack>

    </Center>
  )
}
