import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  children,
  ...rest
}) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
