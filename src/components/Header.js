import React from "react"

import { Flex, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex as="header" padding="1.5rem" bg="teal.400" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="md">
          Header
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
