import { VStack } from '@chakra-ui/react'
import React from 'react'
import { InputGroup, Input, InputRightElement, Button, Text, Flex, Tag, TagLabel, TagCloseButton, SimpleGrid } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import FilterSelector from './FilterSelector'
import { useState } from 'react'

export default function PetFilter() {
    const addName = () => {
        console.log("Adding Name")
    }
    const [selected, setSelected] = useState([])

    const clearSelected = () => {
        setSelected([])
    }

    const isSelected = (option) => {
        return selected.includes(option)
    }

    const callback = (option) => {
        if (isSelected(option)) {
            setSelected(selected.filter((item) => item !== option))
        } else {
            setSelected([...selected, option])
        }
    }
  return (
    <VStack p={4} alignItems={"flex-start"} shadow={'2xl'} borderRadius={"2xl"} bg={"white"} h={"fit-content"} >
        <Text fontSize={"2xl"} fontWeight={"semibold"} pb={2}>Filters</Text>
        <Flex maxW="270px" flexWrap={"wrap"}>
        {selected.map((option) => {
            return <Tag size={"md"} key={option.id} m={"2px"} borderRadius={"full"} variant="solid" colorScheme="purple" >
                <TagLabel>{option.name}</TagLabel>
                <TagCloseButton onClick={()=>callback(option)} />
            </Tag>
        })}
        </Flex>

        <Text fontWeight={"semibold"}>Name:</Text>
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={'text'}
            />
            <InputRightElement width='4.5rem'>
                <Button  size='sm' onClick={addName} colorScheme='purple'>
                    <Search2Icon />
                </Button>
            </InputRightElement>
        </InputGroup>
        <Text fontWeight={"semibold"}>Animal:</Text>
        <FilterSelector callback={callback} category="animal" />
        <Text fontWeight={"semibold"}>Gender:</Text>
        <FilterSelector callback={callback} category="gender" />
        <Text fontWeight={"semibold"}>Age:</Text>
        <FilterSelector callback={callback} category="age" />
        <Text fontWeight={"semibold"}>Adoption Fee:</Text>
        <FilterSelector callback={callback} category="fee" />
        {(selected.length) && <Button colorScheme='purple' w={"full"} mt={4} onClick={() => clearSelected()}>Clear Filters</Button>}
    </VStack>
  )
}
