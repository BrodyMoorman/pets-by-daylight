import React from 'react'
import {Box, SimpleGrid, Text} from '@chakra-ui/react'
import { useState } from 'react'
import FunctionalTopbar from '../components/FunctionalTopbar'
import PetGrid from '../components/PetGrid'

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
  },
  {
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
  },

])

  return (
    <FunctionalTopbar content = {
      <Box w={"full"} overflow={"hidden"} display={"flex"} justifyContent={"flex-start"} flexDirection={"column"} alignItems={"center"}>
      <PetGrid pets = {pets}/>
      </Box>
    } />
    
  )
}
