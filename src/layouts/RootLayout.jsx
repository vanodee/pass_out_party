import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BackgroundImg from '../assets/bg_img.webp'
import PartyLogo from '../assets/party_logo.webp'
import StevanoPetersLogo from '../assets/emblem_white.webp'
import { useEffect, useRef, useState } from "react";

export default function RootLayout() {

    const [currentPage, setCurrentPage] = useState(null)
    const [pathArraySize, setpathArraySize] = useState(null)
    const location = useLocation()


    //TRACKS THE TITLE OF THE CURRENT WEBPAGE
    useEffect(() => {
        const pathParts = location.pathname.split("/")        // Return the path as an array removing the "/"
            .filter(pathPart => pathPart !== '');               // Filter out all empty strings and spaces from the array
        const lastPart = pathParts[pathParts.length - 1];     // Return the last item in the array (array.length - 1)
        // const formattedName = lastPart.replace(/_/g, " ");    // Replace underscores with spaces

        // setCurrentPage(formattedName)
        setpathArraySize(pathParts.length)    // This stores the length of the path array
        console.log("Parent: ", lastPart, pathParts.length)
    }, [location])

    return (
      <>
          <Flex
              as="main"
              bg='primary.1'
              h="100vh"
              justifyContent='center'
              alignItems="center"
          >
              <VStack
                h="100%"
                    w="800px"
                    bgImage={BackgroundImg}

                  bgSize="cover"
                  spacing="0px"
              >
                  <Box
                      h={pathArraySize === 0 ? "30vh" : "10vh"}
                    //   bg="red"
                  >
                      <Link to="/">
                          <Image
                              src={PartyLogo}
                              alt="The Pass Out Party"
                              h="80%"
                                mt={pathArraySize === 0 ? "15%" : "10%"}
                          />
                      </Link>
                  </Box>


                  <Box
                        h={pathArraySize === 0 ? "60vh" : "80vh"}
                        w="100%"
                        // bg="Blue"
                  >
                      <Outlet />
                  </Box>

                  <Box
                      h="10vh"
                      py="1.5rem"
                    //   bg="pink"
                  >
                      <Image
                          src={StevanoPetersLogo}
                          alt="SP Logo"
                          w="50px"
                          mb="1rem"
                      />
                  </Box>

              </VStack>
          </Flex>
      </>
  )
}
