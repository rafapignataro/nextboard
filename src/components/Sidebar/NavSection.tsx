import { Box, Stack, Text } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'

interface NavSectionProps {
  title: string
  children: ReactNode
}

export const NavSection: React.FC<NavSectionProps> = ({ children, title }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
