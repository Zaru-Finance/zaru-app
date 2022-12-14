import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Stack, Button, IconButton } from '@mui/material';
import theme from '../src/theme';

const line: string = "The Optimism ExosystemIndex (OPI) fives yourr exposure to cutting edge applications on one of Ethereum's most primising L2s."
const Learn: NextPage = () => {
  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Box
          sx={{
            my: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box mb={1.3} pr={2}>
            <IconButton
              href='/learn'
              disableRipple={true}
              disableFocusRipple={true}>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '2.125rem' },
                }}>
                LEARN
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              background: 'black',
              height: '3.5em',
              width: '2px',
              marginBottom: '0.70em',
            }}
          />
          <Box mb={1.3} pl={2}>
            <IconButton href='/' disableRipple={true} disableFocusRipple={true}>
              <Typography
                sx={{
                  color: theme.palette.grey[700],
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '2.125rem' },
                }}>
                STAKE
              </Typography>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ pb: '1em', mb: '1em' }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              fontSize: '88px',
              lineHeight: '119px',
            }}>
            What is OPI?
          </Typography>
        </Box>
        <Stack direction='row' justifyContent='flex-start' spacing={2}>
          <Box
            flex={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'baseline',
            }}>
            <Typography variant='body1' sx={{ mb: '1em', pb: '1em' }}>
              {line}
            </Typography>
            <Typography variant='body1' sx={{ mb: '1em', pb: '1em' }}>
              Buy OPI in 1-click and never worry about keeping pace with the
              innovations
            </Typography>

            <Button
              fullWidth
              variant='contained'
              sx={{ borderRadius: '10px', mb: '1em' }}>
              Buy OPI on TokenSets
            </Button>
            <Button fullWidth variant='contained' sx={{ borderRadius: '10px' }}>
              Stake OPI
            </Button>
          </Box>
          <Box
            flex={1}
            sx={{
              height: '380px',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
            }}>
            Graph Visualization
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Learn;
