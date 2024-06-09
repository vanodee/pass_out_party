import { Heading, Image, VStack } from "@chakra-ui/react";
import PaperEffect from "../assets/Paper.webp"
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function AdminPage() {
  const guest_count = useLoaderData();

  return (
    <>
      <VStack
        bg="white"
        w="100%"
        h="100%"
        py="5%"
        justifyContent="space-between"
      >
        <Heading textAlign="center">
          GUEST LIST
        </Heading>


        <Heading textAlign="center">
          GENDER:
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


// //LOADER FUNCTION
// export const guestinfo_loader = async ({ params }) => {
//   const { id } = params
//   const res = await fetch('http://localhost:4000/guests/' + id);
//   return res.json();
// }