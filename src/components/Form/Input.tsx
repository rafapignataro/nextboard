import React from 'react'
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        type="email"
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
