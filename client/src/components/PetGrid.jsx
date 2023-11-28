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
import axios from 'axios'



export default function PetGrid(props) {
    const [distance, setDistance] = useState(100)
    const [location, setLocation] = useState(32826)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [listings, setListings] = useState([])

    const callback = (zip, distance) => {
        setDistance(distance)
        setLocation(zip)
        onClose()

    }
    // load listings on first render with default values
    React.useEffect(() => {
        search({
            animal : [],
            gender: [],
            age: [],
            fee: 500,
            search: ""
        })
    }, [])

    const search = async (request) => {
        let q = {
            query: {}
        }
        let animalString = ""
        let genderString = ""
        let ageString = ""
        for (let i = 0; i < request.animal.length; i++) {
            if(i == request.animal.length - 1) {
                animalString += request.animal[i].toLowerCase()
                break
            }
            animalString += request.animal[i].toLowerCase() + ","
        }
        for (let i = 0; i < request.gender.length; i++) {
            if(i == request.gender.length - 1) {
                genderString += request.gender[i].toLowerCase()
                break
            }
            genderString += request.gender[i].toLowerCase() + ","
        }
        for (let i = 0; i < request.age.length; i++) {
            if(i == request.age.length - 1) {
                ageString += request.age[i]
                break
            }
            ageString += request.age[i].toLowerCase() + ","
        }

        if(animalString.length > 0) {
            q.query.animal = animalString
        }
        if(genderString.length > 0) {
            q.query.gender = genderString
        }
        if(ageString.length > 0) {
            q.query.age = ageString
        }
        q.query.search = request.search
        q.query.fee = request.fee


        console.log(q)
        try {
        console.log(q)
        const {data} = await axios.post('http://localhost:8000/home', q)
        setListings(data)
        
        if(data.error) {
            console.log(data.error)
        }
        console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <Flex gap={3}>
        <Box display={["none", "block"]}>
        <PetFilter callback={search} />
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
            listings.map((pet, index) => {
                return (
                <PetCard key = {index} breed= {pet.pet_breed} age={pet.pet_birthday} cost = {pet.adoption_fee} name = {pet.pet_name} desc = {pet.pet_description} image = {pet.image_url[0]} id = {pet._id} />
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
