import { 
    Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { RefObject } from 'react'

const CustomDrawer = ({isOpen, setOpen, aboutSectionRef, contactSectionRef, blogSectionRef, scrollToSection } : {
    isOpen : boolean,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>,
    aboutSectionRef: RefObject<HTMLElement>;
    contactSectionRef: RefObject<HTMLElement>;
    blogSectionRef: RefObject<HTMLElement>;
    scrollToSection: (ref: RefObject<HTMLElement>) => void;
}) => {
  return (
    <>
     <Button
        display={["inherit", "none", "none", "none"]}
        variant="ghost"
        color='white'
        _hover={{bg:'white.200'}}
        mr="0.5rem"
        onClick={() => setOpen(true)}
      >
        <HamburgerIcon boxSize="20px" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={() => setOpen(false)}>
        <DrawerOverlay />
        <DrawerContent fontFamily="jakarta" bg="#000000">
          <DrawerCloseButton color='#FFFFFF' mt="0.5rem" />
          <DrawerHeader color='#FFFFFF' >Menu</DrawerHeader>

          <DrawerBody px="0">
          <Flex 
           gap='10px'
           color='#FFFFFF'
           fontFamily='Inter'
           fontWeight={200}
           fontSize='16px'
           flexDir="column"
           ml={10}
        >
            <Text cursor="pointer">Home</Text>
            <Text cursor="pointer" onClick={() => { scrollToSection(aboutSectionRef)}} _active={{color:'red'}}>About</Text>
            <Text cursor="pointer" onClick={() => { scrollToSection(contactSectionRef); setOpen(false) }}>Contact</Text>
            <Text cursor="pointer" onClick={() => { scrollToSection(blogSectionRef) ; setOpen(false) }}>Blog</Text>
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CustomDrawer;