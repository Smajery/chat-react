import React from 'react'
import { Box, Button, Container, Grid } from '@mui/material'

const Login = () => {
  return (
    <Container>
      <Grid
        container
        style={{height: window.innerHeight - 50}}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid>
          <Box p={5}>
            <Button variant={'contained'}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login