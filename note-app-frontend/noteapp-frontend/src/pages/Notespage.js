import { Box, Button, FormControl, FormLabel, Grid, IconButton, Input, Textarea, grid, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNotes, getNotes } from '../redux/notes/note.actions'
import NoteCard from '../components/notepage/Notecard/NoteCard'
import { CiCirclePlus } from "react-icons/ci";
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
export default function Notespage() {
  const [notes,setNotes]= useState([])
  const{loading,error,data} = useSelector(state => state.noteReducer)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[title,setTitle]= useState('')
  const[body,setBody]= useState('')
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const createNote= ()=>{
    dispatch(createNotes({title,body}))
    onClose()
  }

  useEffect(()=>{
    dispatch(getNotes())
  },[])

  useEffect(()=>{
    setNotes(data)
    // console.log({data})
  },[data])

  return (
    <Box mt={15} padding={8}>
      <Grid w={"100%"} margin="auto" gridTemplateColumns="repeat(4,1fr)">
        {notes?.map((el)=><NoteCard {...el} />)}
      </Grid>
      
      <>
      <IconButton icon={<FaPlus />} boxShadow={"box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"} borderRadius={50} bg={'yellowgreen'} position={"fixed"} bottom={0} right={0} margin={16} onClick={onOpen} ></IconButton>

      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>First name</FormLabel> */}
              <Input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter title here' />
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Textarea mt={8} value={body} onChange={(e)=>{setBody(e.target.value)}}  placeholder='Enter description here' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createNote}> 
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    </Box>
  )
}

 