import React from "react"

import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"

import Header from "../components/Header"

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Container>
        <Stack as={Box} textAlign={"center"}>
          <Heading>こんにちは、こんにちは！</Heading>
          <Text>
            “あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。”
          </Text>
        </Stack>
      </Container>
    </ChakraProvider>
  )
}
