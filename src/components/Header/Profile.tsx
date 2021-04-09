import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
  showProfileData?: boolean
}

export const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text color="gray.300" fontSize="small">
            Rafael Pignataro
          </Text>
          <Text>rafapignataro@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Rafael Pignataro" />
    </Flex>
  )
}
