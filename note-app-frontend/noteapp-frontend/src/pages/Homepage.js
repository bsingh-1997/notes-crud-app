import { Box ,Heading,Image,Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import note from '../assets/note.png';

export default function Homepage() {
  return (
    <>
    <Box padding={8}>
      {/* <Navbar /> */}
      <Image w={500} position={"absolute"} right={0} src={note}  alt="Note" />
      {/* <p>homepasge</p> */}
      <Heading textAlign={"Start"} m={16} >Note app</Heading>
      <Text textAlign={"justify"} maxWidth={'50%'} mt={8}>Our note-taking application offers a streamlined and intuitive platform for capturing ideas, organizing thoughts, and managing tasks effectively. With features like easy note creation, customizable organization, seamless sync across devices, rich text formatting, real-time collaboration, reminders and notifications, and robust security measures, it's the perfect tool for students, professionals, and anyone seeking to enhance productivity and stay organized. Whether you're jotting down quick reminders or collaborating on complex projects, our application provides the flexibility and functionality you need to stay productive and inspired.</Text>
    </Box>
    </>
  );
}
