import { Text } from '@chakra-ui/layout'
import React from 'react'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      nextboard
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  )
}
