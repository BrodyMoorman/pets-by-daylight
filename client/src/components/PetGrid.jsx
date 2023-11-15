import { Box , Flex, SimpleGrid, Text, FormControl, FormLabel, Select
    , Modal, ModalOverlay,ModalContent,ModalHeader,ModalFooter,
    ModalBody, ModalCloseButton, Button
} from '@chakra-ui/react'

import { useDisclosure } from "@chakra-ui/react"

import React from 'react'
import PetCard from '../components/PetCards'
import Image from '../assets/signUpImage.jpg'
import PetFilter from './PetFilter'
import { useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
import LocationSelect from './LocationSelect'



export default function PetGrid(props) {
    const [distance, setDistance] = useState(100)
    const [location, setLocation] = useState(32826)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const callback = (zip, distance) => {
        setDistance(distance)
        setLocation(zip)
        onClose()

    }

  return (
    <Flex gap={3}>
        <Box display={["none", "block"]}>
        <PetFilter />
        </Box>
        
        <Box>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"flex-end"} mb={2}>
                <Flex alignItems={"center"}>
                    <Text fontSize={["md","xl"]}>Searching within&nbsp; </Text> <Text fontSize={"xl"} fontWeight={"semibold"}>{distance}mi&nbsp;</Text> <Text fontSize={"xl"}>of&nbsp; </Text><Text fontSize={"xl"} fontWeight={"semibold"}>{location}</Text>
                    <EditIcon ml={4} color={"gray.500"} _hover={{color:"purple.400"}} cursor={"pointer"} fontSize={"xl"} onClick={onOpen} />
                </Flex>
                <Flex bg={"white"} p={2} w={"150px"} borderRadius={"lg"} shadow={"lg"}>
                    <FormControl>
                        <FormLabel mb={-1} fontWeight={"normal"} color={"gray.600"}>Sort By:</FormLabel>
                        <Select  variant={"unstyled"} fontWeight={"semibold"} >
                            <option value="option1">Nearest</option>
                            <option value="option2">Newest Addition</option>
                            <option value="option3">Oldest Addition</option>
                        </Select>
                    </FormControl>
                </Flex>
            </Flex>
            <SimpleGrid spacingY={"40px"} spacingX={"20px"}  columns={[1,4]} mb={8}>
            {
            props.pets.map((pet, index) => {
                return (
                <PetCard key = {index} cost = {pet.cost} name = {pet.name} desc = {pet.desc} image = {Image} id = {pet.id} />
            )})
            }
            </SimpleGrid>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Edit Location</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <LocationSelect callback={callback} distance={distance} zipCode={location} />
            </ModalBody>
            </ModalContent>
        </Modal>
    </Flex>
  )
}
