import { Button } from '@chakra-ui/button'
import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = ({}) => {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  )
}
