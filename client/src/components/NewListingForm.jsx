import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Switch,
    Select,
    InputGroup,
    InputLeftElement,
    Textarea,
    Button,

  } from '@chakra-ui/react'

  import { useState, useEffect } from 'react'
  import ImageUploadPreview from './ImageUploadPreview'
  import axios from 'axios'

export default function NewListingForm() {

  const [values, setValues] = useState({
    petName: '',
    species: '',
    breed: '',
    color: '',
    age: '',
    updatedVaccinations: false,
    adoptionFee: '',
    description: '',
    images: [],
  })
  const [images, setImages] = useState([])

  const handleChange = (e) => {
    if(e.target.files) {
      setImages(images.concat(e.target.files[0]))
      e.target.value = null
    }
    if(e.target.name === 'updatedVaccinations') {
      setValues({ ...values, [e.target.name]: e.target.checked })
      return
    }
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const removeImage = (image) => {
    setImages(images.filter((img) => img !== image))
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const imageUrls = await Promise.all(images.map((image) => imageUpload(image)))
      setValues({ ...values, images: imageUrls })
      setTimeout(() => {
        console.log(values)
      }, 200)
      

    } catch (err) {
      console.log(err)
    }
    
    

  }

  const imageUpload = async (image) => {
    try {
    const formData = new FormData();
    formData.append('file', image)
    const res = await axios.post('http://localhost:8000/upload', formData)
    console.log(res.data)
    return res.data
    } catch (err) {
      console.log(err)
    }
  }

  

    
    return (
      <VStack>
        <FormControl isRequired>
          <FormLabel>Pet Name</FormLabel>
          <Input placeholder='Buddy' name='petName' onChange={handleChange}  />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Species</FormLabel>
          <Select placeholder='Select Species' name='species' onChange={handleChange}>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Fish</option>
            <option>Reptile</option>
            <option>Other</option>
          </Select>
        </FormControl>
        <HStack>
        <FormControl isRequired>
          <FormLabel>Breed</FormLabel>
          <Input placeholder='German Shepard' name='breed' onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Color</FormLabel>
          <Input placeholder='Black' name='color' onChange={handleChange} />
        </FormControl>
        </HStack>
        <HStack w={"full"}>
        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <Select placeholder='Select Age' name='age' onChange={handleChange}>
            <option>Baby</option>
            <option>Young</option>
            <option>Adult</option>
            <option>Senior</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Updated Vaccinations</FormLabel>
          <Switch colorScheme='purple' size={"lg"} name='updatedVaccinations' onChange={handleChange} />
        </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Adoption Fee</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children='$'
            />
            <Input placeholder='Enter amount' name='adoptionFee' onChange={handleChange} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder='Enter description' name='description' onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Images</FormLabel>
          <Input type='file' accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleChange} p={1} />
        </FormControl>
        {images.map((image, index) => (
          <ImageUploadPreview key={index} image={image} callback={removeImage} />
        ))}
        <Button colorScheme='purple' size={"lg"} onClick={handleSubmit}>Create Listing</Button>
      </VStack>
    )
  }