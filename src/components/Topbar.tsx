import { Flex, Text } from '@chakra-ui/react';
import React, { RefObject, useState } from 'react'
import CustomDrawer from './Drawer';

interface NavigationProps {
  aboutSectionRef: RefObject<HTMLElement>;
  contactSectionRef: RefObject<HTMLElement>;
  blogSectionRef: RefObject<HTMLElement>;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
}

const Topbar: React.FC<NavigationProps>  = (
  {
    aboutSectionRef,
    contactSectionRef,
    blogSectionRef,
    scrollToSection,
  }
) => {

  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <Flex justifyContent={{base:'space-between',sm:"space-around"}} padding={5} gap={{base:"10rem"}} alignItems="center" bg='#000000'>
        <Flex>
            <Text
             color='#FFFFFF'
             fontFamily='Inter'
             fontWeight={{base:500,md:500,lg:"700"}}
             fontSize={{base:"16px",md:"18px",lg:"20px"}}
            >
                JustAnotherUIKit
            </Text>
        </Flex>
        <CustomDrawer 
         isOpen={isOpen} 
         setOpen={setOpen} 
         aboutSectionRef={aboutSectionRef}
         contactSectionRef={contactSectionRef}
         blogSectionRef={blogSectionRef}
         scrollToSection={scrollToSection}
        />
        <Flex 
         gap='20px'
         color='#FFFFFF'
         fontFamily='Inter'
         fontWeight={200}
         fontSize='16px'
         display={['none','inherit']}
        >
            <Text cursor="pointer" >Home</Text>
            <Text cursor="pointer" onClick={() => scrollToSection(aboutSectionRef)} >About</Text>
            <Text cursor="pointer" onClick={() => scrollToSection(contactSectionRef)}>Contact</Text>
            <Text cursor="pointer" onClick={() => scrollToSection(blogSectionRef)}>Blog</Text>
        </Flex>
    </Flex>
  )
}

export default Topbar;