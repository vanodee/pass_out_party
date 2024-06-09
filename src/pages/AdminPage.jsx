import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import PaperEffect from "../assets/Paper.webp"
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function AdminPage() {
  const guest_count = useLoaderData();

  //Repetitive Styles
  const div_styles = {
    bg: "primary.1",
    p: "2rem",
    borderRadius: "1rem",
    color: "white",
    textAlign: "center",
    textShadow: '0px 4px rgba(0, 0, 0, 0.8)',
    w: "50%"
  }


  return (
    <>
      <VStack
        bg="white"
        w="100%"
        h="100%"
        py="4%"
        spacing="3rem"
        // justifyContent="space-between"
      >
        <Heading textAlign="center" fontSize="2xl">
          TOTAL GUESTS
          <br />
          CONFIRMED:
          <br />
          {guest_count.length}
        </Heading>

        <HStack>
          <VStack sx={div_styles}>
            <Heading fontSize="2xl">
              GUYS:
              <br />
              XX
            </Heading>
          </VStack>

          <VStack sx={div_styles}>
            <Heading fontSize="2xl">
              LADIES:
              <br />
              XX
            </Heading>
          </VStack>
        </HStack>


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
export const guestinfo_loader = async () => {
  const res = await fetch('http://localhost:4000/guests/');
  return res.json();
}