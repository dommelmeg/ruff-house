import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react'
import {
  FiMenu,
  FiChevronDown,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import { userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom"
import { useMutation } from '@tanstack/react-query';
import axios from "axios";

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const navigate = useNavigate()
  const { toggleColorMode, colorMode } = useColorMode()
  const darkMode = colorMode === 'dark'

  const signUserOut = useMutation({
    mutationFn: (user) => {
      return axios.delete('/logout')
    },
    onSuccess: () => {
      setCurrentUser(null)
      navigate('/signin')
    }
  })
  
  const handleSignOut = () => {
    signUserOut.mutate()
  }
  
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Ruff House
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Box  mx='8'>
            <IconButton aria-label="Color Mode" icon={darkMode ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} variant='ghost' />
          </Box>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={currentUser?.image_url}
                  name={currentUser?.first_name}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{currentUser?.first_name} {currentUser?.last_name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {currentUser?.type}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default MobileNav