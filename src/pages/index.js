import React from "react"

import { ChakraProvider, Flex, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <Flex as="header" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md">
            Header
          </Heading>
        </Flex>
      </Flex>
      <div>Content</div>
    </ChakraProvider>
  )
}
