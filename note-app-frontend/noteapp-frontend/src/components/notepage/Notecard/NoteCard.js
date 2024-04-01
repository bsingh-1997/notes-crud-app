import { Button, Card, CardBody, Flex, Heading, VStack ,Text,} from '@chakra-ui/react'
import { Box, FormControl, FormLabel, Grid, IconButton, Input, Textarea, grid, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import './style.css'
import notebg from "../../../assets/notebg.png"
import { useDispatch } from 'react-redux'
import { deleteNotes,updateNotes } from '../../../redux/notes/note.actions'
import { FaPlus } from "react-icons/fa";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
export default function NoteCard({title,body,user,_id}) {

    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
      const[tempTitle,setTitle]= useState(title)
  const[tempbody,setBody]= useState(body)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const updateNote=()=>{
    dispatch(updateNotes({title:tempTitle,body:tempbody},_id))
  }

  return (
    <Card backgroundImage={`url(${notebg})`} >
        <CardBody>
            <VStack>
                <Heading>{title}</Heading>
                <Text>{body}</Text>
                <Flex gap={2}>
                    
      <>
      <Button onClick={onOpen} >Update</Button>

      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Update note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>First name</FormLabel> */}
              <Input value={tempTitle} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter title here' />
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Textarea mt={8} value={tempbody} onChange={(e)=>{setBody(e.target.value)}}  placeholder='Enter description here' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={updateNote}> 
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
                    <Button onClick={()=>{
                        dispatch(deleteNotes(_id))
                    }}>Delete</Button>
                </Flex>
            </VStack>
        </CardBody>
    </Card>
  )
}
