import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';


// PAGES
import Home from './pages/Home'
import BuyTickets from './pages/BuyTickets'
import ConfirmedTicket, { confirmation_loader } from './pages/ConfirmedTicket'
import AdminPage, { guestinfo_loader } from './pages/AdminPage'
import VerificationPage from './pages/VerificationPage';


// LAYOUTS
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />

      <Route path='Buy_Tickets' element={<BuyTickets />} />

      <Route path=':id' element={<ConfirmedTicket />} loader={confirmation_loader} />

      <Route path='Admin' element={<AdminPage />} loader={guestinfo_loader} />

      <Route path='Verification' element={<VerificationPage />}  />

    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
