import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'



const SupportedLinks = () => {
    const clients = ['Lorem','Ipsum','Dolor','Sit','Dolor','Sit','Lorem','Ipsum']
    return (
        <Flex justifyContent="center" gap="20px" w={{base:'100%',sm:'60%',md:'70%',lg:"40%"}}  flexWrap="wrap">
            {
                clients.map((name,index) => <Box color="#000000" bg="#D9D9D9" w="120px" display="flex" justifyContent="center" border='1px solid white' key={index}>
                    <Text
                     fontSize={{base:'18px',md:'22px',lg:"32px"}}
                    >
                        {name}
                    </Text> 
                </Box>
                )
            }
        </Flex>
    )
}


const Home = () => {
  return (
    <Flex bg='#000000' flexDir="column" justifyContent='center' alignItems="center">
        <Heading mt={{base:'5rem',md:'6rem',lg:"10rem"}} as="h1" color='#FFFFFF' fontWeight="700" fontSize={{base:'18px',md:'32px',lg:"50px"}} lineHeight={{base:'0px',md:'32px',lg:"60px"}} textAlign="center">
         It doesn’t matter what {" "}
        <span style={{ color: "#FFFF00" }}>JS</span>
        </Heading>
        <Heading as="h1" color="#FFFF00" fontWeight="700" fontSize={{base:'18px',md:'32px',lg:"50px"}} lineHeight="60px" textAlign="center">
        Framework {" "}
        <span style={{ color: "#FFFFFF" }}> you work with.</span>
        </Heading>
        <Text
         fontSize={{ base:"14px",md:"18px",lg:"24px" }}
         color="#FFFFFF"
         mt="20px"
        >
            Our boilerplates works with it {" "}
            <span style={{color:'#91D2F7'}}>{'out-of-the-box.'}</span>
        </Text>
        <Box display="flex" gap="20px" mt="20px">
            <Button bg="#FFFF00" _hover={{bg:'#FFFF00'}} rightIcon={<img src="/svgs/leftarrow.svg" alt="Github Icon" />} >
                Get started 
            </Button>
            <Button colorScheme='teal' variant='outline' color="#FFFF00" rightIcon={<img src="/svgs/github.svg" alt="Github Icon" />}>set repo</Button>
        </Box>
        <Flex w="100%" mt={{base:'10rem',md:'12rem',lg:"20rem"}} gap="20px" justifyContent="center" alignItems="center" flexDir="column" >
            <Text color="#FFFFFF" fontSize="16px" fontWeight={700}>
                Supported and backed by:
            </Text>
            <SupportedLinks />
            <Flex flexDir="column" w="100%" justifyContent="center" alignItems="center" >
                <Text color="#FFFFFF" fontSize={{base:'18px',md:'32px',lg:"32px"}} fontWeight={700}>
                Less code. More product.
                </Text>
                <Text fontSize={{base:'12px',md:'14px',lg:"16px"}} fontWeight="400" color="#FFFFFF">
                By using our UI Kit, we make sure you only get <span style={{color:"#FFFF00",fontWeight:"700"}}>
                to focus more
                </span> {" "}
                on 
                </Text>
                <Text textAlign="center" color="#FFFFFF" fontSize={{base:'12px',md:'14px',lg:"16px"}}  fontWeight="400">
                 the other things that matter.
                </Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Home;