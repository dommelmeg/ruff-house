import React from "react";
import { Box, Flex, Text, BoxProps, useColorModeValue, CloseButton } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useAtom } from "jotai";
import { BsPersonArmsUp } from "react-icons/bs";
import { BiSolidDog } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { userAuthAtom } from "../StateManagement/store";
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const OwnerLinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FaHouse, route: '/' },
  { name: 'Doggo House', icon: BiSolidDog, route: '/doghouse' },
  // { name: 'Favorites', icon: MdFavorite, route: '/favorites' },
]

const SitterLinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FaHouse, route: '/sitter-dashboard' },
  { name: 'All Jobs', icon: BsPersonArmsUp, route: '/jobs' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [currentUser] = useAtom(userAuthAtom)

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color='orange.500'>
          RUFF HOUSE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {currentUser.type === 'Owner' ? OwnerLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} slug={link.route}>
          {link.name}
        </NavItem>
      )) :
      SitterLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} slug={link.route}>
          {link.name}
        </NavItem>
      ))
    }
    </Box>
  )
}

export default SidebarContent