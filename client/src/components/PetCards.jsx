import React from 'react'
import { Heading, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'

export default function PetCard(props) {

    const handleClick = () => {
        window.location.href= `/pets/${props.id}`
    }

    return (
    // props.petImage, props.desc, props.species, props.cost, props.name, props.id id = 
        <Card maxW='sm' onClick={handleClick} cursor= "pointer">
    <CardBody shadow= "md" _hover={{shadow:"2xl"}}>
        <Image 
        src={props.image}
        alt={props.desc}
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{props.name}</Heading>
        <Text>
            {props.desc}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            {
            (props.cost > 0 ) ? 
            <Text color='blue.600' fontSize='2xl'> ${props.cost} </Text> 
            : <Text color='blue.600' fontSize='2xl'> FREE </Text>
            }
        </Text>
        </Stack>
    </CardBody>
    </Card>

  )
}
