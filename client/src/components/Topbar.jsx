import { Flex, Image, Box, Button, HStack } from '@chakra-ui/react'

import React from 'react'
import logo from '../assets/PBDLogo.png'

export default function Topbar() {
  return (
    <Flex w="100%" h="60px" justifyContent={"space-between"} pl={1} pr={2} >
        <Box  >
            <Image src={logo} h={"100%"} />
        </Box>

        <HStack>
            <Button variant={"outline"} color={"white"} _hover={{color:"black"}}>Login</Button>
            <Button colorScheme='purple'>Sign Up</Button>
        </HStack>
        

    </Flex>
  )
}
