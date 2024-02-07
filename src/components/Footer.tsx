import { Flex, Text } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

interface BlogProps {
    blogSectionRef?: React.RefObject<HTMLDivElement>;
}

const Footer = forwardRef<HTMLDivElement,BlogProps>((props, ref) => {
  return (
   <Flex bg='#000000' justifyContent="center"  >
        <Flex gap={{base:'2rem',sm:'60%',md:'5rem',lg:"7rem"}} mb="20px" mt={{base:'5rem',md:'7rem',lg:"10rem"}}  justifyContent="center" ref={props.blogSectionRef}>
            <Flex flexDir="column" fontWeight="300" fontSize={{base:'14px',md:'16px',lg:"20px"}} color="#FFFFFF" >
                <Text fontWeight="700">Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
            </Flex>
            <Flex flexDir="column" fontWeight="300" fontSize={{base:'14px',md:'16px',lg:"20px"}} color="#FFFFFF" >
                <Text fontWeight="700" >Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text fontWeight="700" mt="20px">Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
            </Flex>
            <Flex flexDir="column" fontWeight="300" fontSize={{base:'14px',md:'16px',lg:"20px"}} color="#FFFFFF" >
                <Text fontWeight="700" >Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
            </Flex>
            <Flex flexDir="column" fontWeight="300" fontSize={{base:'14px',md:'16px',lg:"20px"}} color="#FFFFFF" >
                <Text fontWeight="700" >Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
                <Text fontWeight="700" mt="20px">Lorem</Text>
                <Text>Ipsum</Text>
                <Text>Ipsum</Text>
            </Flex>
        </Flex>
   </Flex>
  );
})

export default Footer