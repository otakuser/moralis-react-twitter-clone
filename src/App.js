import { Button } from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { Auth } from './Auth';

function App() {
  const { isAuthenticated, logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Web under construction</Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Heading mb={6}>Coming soon</Heading>
      <Auth />
    </Container>
  );
}

export default App;
