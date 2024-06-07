import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
      <>
          <Box
              as="main"
              bg='blue'
              h="100vh"
          >
              <Outlet />
          </Box>
      </>
  )
}
