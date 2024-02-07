import {
    Box, 
    Button, 
    Flex, 
    FormControl, 
    Heading, 
    Input, 
    Text, 
    Textarea 
} from '@chakra-ui/react'
import React, { forwardRef, useState } from 'react'
import Swal from 'sweetalert2';

interface ContactSelectionProps {
    contactSectionRef?: React.RefObject<HTMLDivElement>;
}

const ContactSection = forwardRef<HTMLDivElement, ContactSelectionProps>((props, ref) => {
    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };

    const addFormDataToLocalStorage = (e : React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("formdata",JSON.stringify(formData))
        Swal.fire({
            icon: 'success',
            title: 'Your message has been recorded!'
        })
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            message: '',
        })
    }
  return (
    <Flex
     bg='#000000'
     flexDir="column"
     ref={props.contactSectionRef}
    >
    <Flex 
     mt="7rem"
     flexDir="column"
     p={["0 1.5rem", "0 1.5rem", "0 1.5rem", "0 10rem"]}
    >
        <Heading as="h1" color="#FFFFFF" fontWeight="700" fontSize={{base:'18px',md:'32px',lg:"48px"}}>Contact</Heading>
    </Flex>
    <Flex justifyContent="center" flexDir="column" alignItems="center">
        <Text 
         fontWeight="700" 
         fontSize={{base:'16px',md:'14px',lg:"16px"}}
         color="#FFFFFF"
         mt={{base:'18px',md:'32px',lg:"16px"}}
        >
            Fill out this form to reach us.
        </Text>
        <form onSubmit={addFormDataToLocalStorage} style={{width:'100%',display:'flex',justifyContent:'center',marginTop:"20px"}}   >
            <FormControl display="flex" flexDir='column'  w={{base:'80%',md:'50%',lg:"40%"}} color="#FFFFFF" alignItems="center" gap="20px">
                <Box display='flex' gap="20px" w="100%">
                    <Input name='firstname' placeholder='First name' required onChange={handleInputChange} value={formData.firstname}  />
                    <Input name='lastname' placeholder='Last name' value={formData.lastname} onChange={handleInputChange} />
                </Box>
                <Input name='email' placeholder='Email' required value={formData.email} onChange={handleInputChange}/>
                <Input name='phonenumber' placeholder='Phone (optional)' value={formData.phonenumber} onChange={handleInputChange} />
                <Textarea name='message' placeholder='Message' value={formData.message} onChange={handleInputChange} />
                <Button bg="#91D2F7" w="7rem" color="#000000" type='submit' >Send</Button>
            </FormControl>
        </form>
    </Flex>
    </Flex>
  );
})

export default ContactSection;