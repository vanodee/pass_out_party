import { Heading, Image, VStack } from "@chakra-ui/react";
import CheckMark from "../assets/check_sign.webp"
import PaperEffect from "../assets/Paper.webp"
import { Link, useLoaderData, useParams } from "react-router-dom"



export default function ConfirmedTicket() {

  const confirmed_user = useLoaderData();

  return (
    <>
      <VStack
        bg="white"
        w="100%"
        h="100%"
        py="3%"
        justifyContent="space-between"
      >
        <Heading
          textAlign="center"
          fontSize={{base:'2xl'}}
        >
          Welcome To The Party,
          <br />
          {confirmed_user.name}
        </Heading>

        <Image
          src={CheckMark}
          alt="Check Mark"
          w="40vh"
          maxW="300px"
        />

        <Heading
          textAlign="center"
          fontSize={{ base: '2xl' }}
        >
          GENDER: {confirmed_user.gender}
        </Heading>
      </VStack>

      <Image
        src={PaperEffect}
        alt="Paper Layer"
        pointerEvents='none'
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="800px"
        h="80%"
      />
    </>
  )
}


//LOADER FUNCTION
export const confirmation_loader = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/guests/' + id);
  return res.json();
}