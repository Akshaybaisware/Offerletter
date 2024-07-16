import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
  Button,
} from '@chakra-ui/react';

const OfferLetter = () => {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [
        `Date: [Date]
        Dear [Candidate Name],
        
        We are pleased to offer you the position of [Job Title] at CodeCraze Software Solutions. We are excited to have you join our team and contribute to our ongoing success.

        The terms of your employment are as follows:
        - Position: [Job Title]
        - Start Date: [Start Date]
        - Salary: [Salary] per annum
        - Benefits: [Benefits]

        We look forward to your acceptance of this offer. Please sign and return this letter by [Response Deadline].

        Welcome to the CodeCraze Software Solutions team!

        Sincerely,
        [Your Name]
        [Your Job Title]
        CodeCraze Software Solutions

        This includes basic salary and other allowances benefits, perquisites, etc as per the compensation policy of the company. Refer Annexure - A for compensation break up.

        Your joining date: 01-11-2023
        Job Location: 54 A Ramji villa Dhambare layout, Outer Ring Road, Trimurtee Nagar, Nagpur, Maharashtra 440022.
        Reporting Manager: CEO, Directors, Department Heads
        Timings: 10.00 AM TO 7.00 PM

        Terms and Conditions:
        1. If an Employee joins the Company's Client, then verification and any experience letter will not be provided by the company and legal action will be taken.
        2. Office Timing will be 10.00 AM to 7.00 PM and Report to Ms. Payal Kedar & Ms. Madhuri Chandock.
        3. Sandwich Holiday consider (Any Employee taking half day leave)
        4. Salary will be released between the 7th and 15th of every month (any query regarding salary contact Darshan sir).
        5. From the date of joining, you will be on a 3-month probation period. If your performance is not up to the mark, you will be terminated.
        6. If an Employee wants leave for any reason, you have to drop a mail before 9 AM. After that, no acceptance of leave requests and you will be marked absent. Also, salary for 1 ½ day will be deducted.
        7. If an Employee joins our company, then HE/SHE should work for our company, not for other freelancers at the same time.
        8. Company information should not be disclosed; otherwise, legal action will be taken.
        9. For onboarding-related documentation, contact HR Payal Kedar.
        10. If you don’t serve a 1-month notice period, then you will not get an Experience Letter & you will not get ex-employee verification from our side.

        Please sign the offer letter as a token of your acceptance and return the same to us. On your day of joining, you are requested to contact Ms. Payal Kedar.

        We are sure that our working environment will be conducive to helping you grow professionally as well as personally.
        `,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'OfferLetter.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box bgGradient="linear(to-r, teal.500, green.500)" p={4} w="100%">
      <Container maxW="container.xl" bg="white" p={6} borderRadius="md" boxShadow="xl">
        <Flex direction="column" align="center" mb={6}>
          <Heading as="h1" size="xl" mb={2}>
            CodeCraze Software Solutions
          </Heading>
          <Heading as="h2" size="lg">
            Offer Letter
          </Heading>
        </Flex>
        <Flex justify="center" mb={6}>
          <Image src="./Images/logo.jpeg" alt="Company Logo" boxSize="100px" />
        </Flex>
        <Box mb={6}>
          <Text>Date: [Date]</Text>
          <Text>Dear [Candidate Name],</Text>
          <Text>
            We are pleased to offer you the position of [Job Title] at CodeCraze Software
            Solutions. We are excited to have you join our team and contribute to our
            ongoing success.
          </Text>
          <Text>The terms of your employment are as follows:</Text>
          <UnorderedList spacing={2} mb={6}>
            <ListItem>
              <strong>Position:</strong> [Job Title]
            </ListItem>
            <ListItem>
              <strong>Start Date:</strong> [Start Date]
            </ListItem>
            <ListItem>
              <strong>Salary:</strong> [Salary] per annum
            </ListItem>
            <ListItem>
              <strong>Benefits:</strong> [Benefits]
            </ListItem>
          </UnorderedList>
          <Text>
            We look forward to your acceptance of this offer. Please sign and return this
            letter by [Response Deadline].
          </Text>
          <Text>Welcome to the CodeCraze Software Solutions team!</Text>
          <Text>Sincerely,</Text>
          <Box mt={4}>
            <Text>[Your Name]</Text>
            <Text>[Your Job Title]</Text>
            <Text>CodeCraze Software Solutions</Text>
          </Box>
        </Box>

        <Box mb={6}>
          <Text>
            This includes basic salary and other allowances benefits, perquisites, etc as
            per the compensation policy of the company.
          </Text>
          <Text>Refer Annexure - A for compensation break up.</Text>
          <UnorderedList spacing={2} mb={6}>
            <ListItem>Your joining date: 01-11-2023</ListItem>
            <ListItem>
              Job Location: 54 A Ramji villa Dhambare layout, Outer Ring Road, Trimurtee
              Nagar, Nagpur, Maharashtra 440022.
            </ListItem>
            <ListItem>Reporting Manager: CEO, Directors, Department Heads</ListItem>
            <ListItem>Timings: 10.00 AM TO 7.00 PM</ListItem>
          </UnorderedList>
          <Text>Terms and Conditions:</Text>
          <UnorderedList spacing={2} mb={6}>
            <ListItem>
              If an Employee joins the Company's Client, then verification and any
              experience letter will not be provided by the company and legal action will
              be taken.
            </ListItem>
            <ListItem>
              Office Timing will be 10.00 AM to 7.00 PM and Report to Ms. Payal Kedar & Ms.
              Madhuri Chandock.
            </ListItem>
            <ListItem>Sandwich Holiday consider (Any Employee taking half day leave)</ListItem>
            <ListItem>
              Salary will be released between the 7th and 15th of every month (any query
              regarding salary contact Darshan sir).
            </ListItem>
            <ListItem>
              From the date of joining, you will be on a 3-month probation period. If your
              performance is not up to the mark, you will be terminated.
            </ListItem>
            <ListItem>
              If an Employee wants leave for any reason, you have to drop a mail before 9
              AM. After that, no acceptance of leave requests and you will be marked
              absent. Also, salary for 1 ½ day will be deducted.
            </ListItem>
            <ListItem>
              If an Employee joins our company, then HE/SHE should work for our company,
              not for other freelancers at the same time.
            </ListItem>
            <ListItem>
              Company information should not be disclosed; otherwise, legal action will be
              taken.
            </ListItem>
            <ListItem>For onboarding-related documentation, contact HR Payal Kedar.</ListItem>
            <ListItem>
              If you don’t serve a 1-month notice period, then you will not get an
              Experience Letter & you will not get ex-employee verification from our side.
            </ListItem>
          </UnorderedList>
          <Text>
            Please sign the offer letter as a token of your acceptance and return the same
            to us. On your day of joining, you are requested to contact Ms. Payal Kedar.
          </Text>
          <Text>
            We are sure that our working environment will be conducive to helping you grow
            professionally as well as personally.
          </Text>
        </Box>
        <Flex justify="center">
          <Button colorScheme="teal" onClick={handleDownload}>
            Download Offer Letter
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default OfferLetter;
