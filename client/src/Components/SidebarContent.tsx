import React from "react";
import { Box, Flex, Text, BoxProps, useColorModeValue, CloseButton, Switch, useColorMode, HStack, IconButton } from "@chakra-ui/react";
import NavItem from "./NavItem";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import { BsPersonArmsUp } from "react-icons/bs";
import { BiSolidDog } from "react-icons/bi";
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, route: '/' },
  { name: 'Dog House', icon: BiSolidDog, route: '/doghouse' },
  { name: 'Sitters', icon: BsPersonArmsUp, route: '/sitters' },
  { name: 'Favorites', icon: FiStar, route: '/favorites' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {


  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color='orange.500'>
          RUFF HOUSE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} slug={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent