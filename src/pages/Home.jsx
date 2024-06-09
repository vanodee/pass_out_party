import { Heading, Image, VStack, Button } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import PriceImg from '../assets/gate_fee.webp'

export default function Home() {
  return (
    <VStack
      h="100%"
      justifyContent="space-between"
      p="5%"
      // bg="red"
    >
      <Image
        src={PriceImg}
        alt='gate fee'
        w="70%"
        maxW="300px"
      />

      <Heading
        color="white"
        fontSize={{base:"lg", md:"xl", lg:"2xl"}}
        textShadow='0px 3px rgba(0, 0, 0, 0.8)'
        textAlign='center'
      >
        13th June, 2024 (6PM - DAWN)
        <br />
        <br />
        PAlAZINNO HOTEL AND SUITES
        <br/>
        @ Adetola road, Aguda, Surulere, Lagos
      </Heading>


      <Button
        as={NavLink}
        to="Buy_Tickets"
        w="80%"
        color="primary.1"
        fontSize="x-large"
        py="1.5rem"
      >
        BUY TICKETS
      </Button>

      <Button
        w="80%"
        color="primary.1"
        fontSize="x-large"
        py="1.5rem"
      >
        GET DIRECTIONS
      </Button>
    </VStack>
  )
}
