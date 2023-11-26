import React from 'react'
import {Box, Flex, VStack, HStack, Text, Button, Divider} from '@chakra-ui/react'
import Carousel from './Carousel'

export default function PetDisplay() {
  return (
    <Flex w={"full"} justifyContent={"center"} >
        <VStack w={"900px"} p={6} borderRadius={"xl"} shadow={"2xl"} bg={"white"}>
      
            <VStack gap={0} alignItems={"center"}>
                <Text fontSize={"4xl"}>Buddy</Text>
                <Text>Orlando, FL</Text>
            </VStack>

        <Carousel />
        <Text fontSize={"4xl"} fontWeight={"semibold"}>About</Text>
        <Divider  w={"50%"}/>
        <HStack>
            <VStack w={"250px"} p={2} >
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Species:</Text>
                    <Text>Dog</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Breed:</Text>
                    <Text>German Shepard</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Age:</Text>
                    <Text>2 years</Text>
                </HStack>
                <Divider />

            </VStack>
            <Divider orientation="vertical" h={"80%"} />
            <VStack w={"250px"} p={2} >
            <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Color:</Text>
                    <Text>Brown</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"}  w={"full"}>
                    <Text fontWeight={"semibold"}>Vacinated:</Text>
                    <Text>Yes</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Adoption Fee:</Text>
                    <Text>$200.00</Text>
                </HStack>
                <Divider />                
            </VStack>
        </HStack>
        <Text fontSize={"4xl"} fontWeight={"semibold"}>Description</Text>
        <Divider  w={"50%"}/>
        <Text w={"60%"}>Buddy is a frendly boy, he loves playing and singing and being an awesome dude. </Text>
        <Text fontSize={"4xl"} fontWeight={"semibold"}>Contact</Text>
        <Divider  w={"50%"}/>
        <VStack>
            <HStack>
                <Text fontWeight={"semibold"}>Email:</Text>
                <Text> example@gmail.com </Text>
            </HStack>
            <Divider />
            <HStack>
                <Text fontWeight={"semibold"}>Phone:</Text>
                <Text> 123-456-7890 </Text>
            </HStack>

        </VStack>

        </VStack>
         
    </Flex>
  )
}
