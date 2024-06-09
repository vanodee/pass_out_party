import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  FormErrorMessage,
  Heading,
  Text
} from '@chakra-ui/react'



export default function BuyTickets() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      gender: Yup.string().required('Gender is required'),
    }),

    onSubmit: (values) => { // Handle form submission
      // console.log('Form submitted with values:', values);

      // Send Form Values to DB
      fetch("http://localhost:4000/guests", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }).then(() => {
        console.log('Ticket Purchase Sucessful');
      })
    },
  });



  //Custom Form Styling
  const inputFieldStyles = {
    bg: 'highlight.1',
    focusBorderColor: 'primary.2'
  }
  const errorStyles = {
    bg: 'crimson',
    justifyContent: 'center',
    borderRadius: '0.3rem',
    color: 'white',
  }



  return (
    <VStack
      bg="rgba(82,117,85,0.7)"
      backdropFilter='auto'
      backdropBlur='10px'
      borderRadius="1rem"
      justifyContent="center"
      alignItems="center"
      p="2rem"
      mx="10%"
      my="5%"
    >

      <Heading
        color="white"
      >
        BUY TICKETS
      </Heading>

      <form
        style={{ width: "100%" }}
        onSubmit={formik.handleSubmit}
      >
        <FormControl
          isInvalid={formik.errors.name && formik.touched.name}
          isRequired
          h='6.5rem'
        >
          <FormLabel htmlFor="name" color={'white'}>Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            bg={'highlight.1'}
            focusBorderColor='primary.2'
          />
          <FormErrorMessage sx={errorStyles}>
            {formik.errors.name}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.errors.email && formik.touched.email}
          isRequired
          h='6.5rem'
        >
          <FormLabel htmlFor="email" color={'white'}>Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            bg={'highlight.1'}
            focusBorderColor='primary.2'
            placeholder=""
          />
          <FormErrorMessage sx={errorStyles}>
            {formik.errors.email}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.errors.gender && formik.touched.gender}
          isRequired
          h='6.5rem'
        >
          <FormLabel htmlFor="gender" color={'white'}>Gender</FormLabel>
          <Select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
            onBlur={formik.handleBlur}
            placeholder="What's your gender ?"
            sx={inputFieldStyles}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Select>
          <FormErrorMessage sx={errorStyles}>
            {formik.errors.gender}
          </FormErrorMessage>
        </FormControl>

        <Text
          color="white"
          fontSize="md"
          fontWeight="bold"
          textShadow='0px 2px rgba(0, 0, 0, 0.8)'
        >
          ** Guys - #5,000
          <br/>
          ** Ladies - #2,000
          <br />
          <br />
          ** Your Gate-Pass QR-Code will be sent to your Email, once payment is made. It will be scanned before entry to the party venue.
        </Text>

        <Button
          variant="outline"
          size="lg"
          color="white"
          justifySelf="center"
          type="submit"
          mt="2rem"
        >
          Proceed To Pay
        </Button>

      </form>
    </VStack>
  )
}
