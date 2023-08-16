import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box 
      minH="100vh" 
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
    
      {/* <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} /> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          {/* <SidebarContent onClose={onClose} /> */}
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}

export default NavBar
