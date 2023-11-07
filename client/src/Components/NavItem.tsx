import React from "react"
import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { useNavigate } from "react-router-dom"

interface NavItemProps extends FlexProps {
  icon: IconType
  slug: string
  children: React.ReactNode
}

const NavItem = ({ icon, slug, children, ...rest }: NavItemProps) => {
  const navigate = useNavigate()

  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      onClick={() => navigate(slug)}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'orange.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

export default NavItem