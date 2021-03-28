import React from "react"

import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react"

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
      <Container>
        <Stack as={Box} textAlign={"center"}>
          <Heading>こんにちは、こんにちは！</Heading>
          <div>
            “あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。”
          </div>
        </Stack>
      </Container>
    </ChakraProvider>
  )
}
