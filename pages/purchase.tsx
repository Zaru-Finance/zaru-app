import type { NextPage } from 'next';
import { useEthers } from '@usedapp/core';
import { Container, Typography, Box } from '@mui/material';
import { PurchaseCard } from '../src/components/tokens/PurchaseCard';


const Purchase: NextPage = () => {
  const { account } = useEthers();
  const isConnected = account !== undefined;

    return (
      <>
        <Container maxWidth='lg' sx={{ height: '100vh' }}>
          <Box>
            {/* <PurchaseCard /> */}
          </Box>
        </Container>
      </>
    );
};

export default Purchase;