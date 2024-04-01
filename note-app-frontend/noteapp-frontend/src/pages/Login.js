import { Box, Flex ,Image, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import {getUser} from "../redux/users/user.actions"
import {
    
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import userReducer from '../redux/users/user.reducer'
import { useNavigate } from 'react-router-dom'
  
export default function Login() {
  const nav = useNavigate()
  const{auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth,token)
  if (auth){
    nav("/notes")
  } 
  const[email,setEmail]=useState("")
    const  [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        dispatch(getUser({email,password}))
    }
  
  return (
    <Flex width={'100%'} padding={4}>
        <Image width={'50%'} src='https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg'/>
        <VStack width={'50%'}>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>
    </Flex>
  )
}
