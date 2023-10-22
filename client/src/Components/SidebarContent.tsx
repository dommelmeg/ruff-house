import React from "react";
import { Box, Flex, Text, BoxProps, useColorModeValue, CloseButton } from "@chakra-ui/react";
import NavItem from "./NavItem";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
} from 'react-icons/fi'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Dog House', icon: FiTrendingUp },
  { name: 'Sitters', icon: FiCompass },
  { name: 'Favorites', icon: FiStar },
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
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Ruff House
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent