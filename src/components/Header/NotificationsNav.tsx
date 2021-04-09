import React from 'react'
import { Box, Flex, Text, Avatar, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

interface NotificationsNavProps {}

export const NotificationsNav: React.FC<NotificationsNavProps> = ({}) => {
  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing={['6', '8']}
        mx={['6', '8']}
        pr={['6', '8']}
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </Flex>
  )
}
