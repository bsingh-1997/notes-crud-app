import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/users/user.type';

export default function Navbar() {
  const{auth,token,loading,error} = useSelector((state)=>state.userReducer)
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const nav = useNavigate()
  // console.log(auth)
  return (
    <>
      <Box zIndex={1000}  w={"100%"} boxShadow={"rgba(0,0,0,0.16) 0px 3px 6px, rgba(0,0,0,0.23) 0px 3px 6px;"} bg={"yellowgreen"} px={4}> 
      {/* ive removed the position fixed from above component */}
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} onClick={()=>{
                nav('/')
              }} cursor={'pointer'} color={"white"}>Note app</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button display={auth==true?"none":"block"} onClick={()=>{
                nav('/login')
              }} color={'green'}>Login</Button>
              <Button display={auth==true?"none":"block"}  color={'green'} onClick={()=>{
                nav('/register')
              }}>Signup</Button>
              <Button display={auth==true?"block":"none"}  color={'green'} onClick={()=>{
                nav('/notes')
              }}>All Notes</Button>
              <Button onClick={toggleColorMode} color={'green'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center key="avatar">
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center key="username">
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
