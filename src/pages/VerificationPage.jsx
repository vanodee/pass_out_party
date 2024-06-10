import { Heading, Image, VStack } from "@chakra-ui/react";
import CheckMark from "../assets/check_sign.webp"
import PaperEffect from "../assets/Paper.webp"
import { Link, useLoaderData, useParams } from "react-router-dom"
import { useState, useEffect } from "react";


export default function VerificationPage() {

    const confirmed_user = useLoaderData();
    const [transactionDetails, setTransactionDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const paymentReference = localStorage.getItem('paymentReference');

        if (paymentReference) {
            fetch(`http://localhost:5000/verify?reference=${paymentReference}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error fetching transaction details: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setTransactionDetails(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        } else {
            setError('Payment reference not found');
            setLoading(false);
        }
    }, []);


    return (
        <>
            <VStack
                bg="white"
                w="100%"
                h="100%"
                py="3%"
                justifyContent="space-around"
            >

                {loading && (
                    <Heading
                        textAlign="center"
                        fontSize={{ base: '2xl' }}
                    >
                        VERIFYING YOUR PAYMENT,
                        <br />
                        PLEASE WAIT ...
                    </Heading>
                )}

                {(!loading) && (
                    <>
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
                            VERIFICATION COMPLETE
                        </Heading>
                    </>
                )}

                {/* <Heading
                    textAlign="center"
                    fontSize={{ base: '2xl' }}
                >
                    Welcome To The Party,
                    <br />
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
                    GENDER:
                </Heading> */}

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
