import React from 'react'
import {Box, Flex, VStack, HStack, Text, Button, Divider} from '@chakra-ui/react'
import Carousel from './Carousel'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function PetDisplay() {
    const {id} = useParams()
    console.log(id)
    const [pet, setPet] = React.useState({})
    const [images, setImages] = React.useState([])
    React.useEffect(() => {
        axios.get(`http://localhost:8000/listing/${id}`)
            .then(res => {
                setPet(res.data)
                setImages(res.data.image_url)
            })
            .catch(err => console.log(err))
    }, [id])

    
  return (
    <Flex w={"full"} justifyContent={"center"} overflowX={"hidden"} >
        <VStack w={"900px"} p={6} borderRadius={"xl"} shadow={"2xl"} bg={"white"}>
      
            <VStack gap={0} alignItems={"center"}>
                <Text fontSize={"4xl"}>{pet.pet_name}</Text>
                <Text>Zip Code: {pet.zip_code}</Text>
            </VStack>

        {images.length > 0 &&<Carousel images={images} />}
        <Text fontSize={"4xl"} fontWeight={"semibold"}>About</Text>
        <Divider  w={"50%"}/>
        <HStack flexDirection={["column", "row"]}>
            <VStack w={"250px"} p={2} >
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Species:</Text>
                    <Text>{pet.pet_species}</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Breed:</Text>
                    <Text>{pet.pet_breed}</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Age:</Text>
                    <Text>{pet.pet_birthday}</Text>
                </HStack>
                <Divider />

            </VStack>
            <Divider orientation="vertical" h={"80%"} />
            <VStack w={"250px"} p={2} >
            <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Color:</Text>
                    <Text>{pet.pet_color}</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"}  w={"full"}>
                    <Text fontWeight={"semibold"}>Vacinated:</Text>
                    <Text>{pet.vaccinated ? "Yes" : "No"}</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Text fontWeight={"semibold"}>Adoption Fee:</Text>
                    <Text>${pet.adoption_fee}</Text>
                </HStack>
                <Divider />                
            </VStack>
        </HStack>
        <Text fontSize={"4xl"} fontWeight={"semibold"}>Description</Text>
        <Divider  w={"50%"}/>
        <Text w={"60%"} textAlign={"center"}>{pet.pet_description} </Text>
        <Text fontSize={"4xl"} fontWeight={"semibold"}>Contact</Text>
        <Divider  w={"50%"}/>
        <VStack>
            <HStack>
                <Text fontWeight={"semibold"}>Email:</Text>
                <Text> {pet.owner_email} </Text>
            </HStack>
            <Divider />
            <HStack>
                <Text fontWeight={"semibold"}>Phone:</Text>
                <Text> {pet.owner_phone} </Text>
            </HStack>

        </VStack>

        </VStack>
         
    </Flex>
  )
}
