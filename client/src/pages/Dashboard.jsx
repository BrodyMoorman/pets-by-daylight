import React from 'react'
import PetCard from '../components/PetCards'
import Image from '../assets/signUpImage.jpg'
import {Box, SimpleGrid} from '@chakra-ui/react'
import { useState } from 'react'

export default function Dashboard() {
  
  const [pets, setPets] = useState([{
    "id" : "2",
    "cost" : "50",
    "name" : "Kevin",
    "desc" : "Bad Boy"
  },
  {
    "id" : "3",
    "cost" : "0",
    "name" : "Max",
    "desc" : "Meh Boy"
  }, 
  {
    "id" : "4",
    "cost" : "100",
    "name" : "Dummy",
    "desc" : "Boy"
  }

])

  return (
    <Box w= "100vw" h= "100vh">
      <SimpleGrid spacing='40px'>
        {
          pets.map((pet, index) => {
            return (
            <PetCard key = {index} cost = {pet.cost} name = {pet.name} desc = {pet.desc} image = {Image} id = {pet.id} />
          )})
        }
      </SimpleGrid>
      </Box>
  )
}
