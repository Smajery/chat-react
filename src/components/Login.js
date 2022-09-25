import React, { useContext } from 'react'
import { Box, Button, Container, Grid } from '@mui/material'
import firebase from 'firebase/compat/app'
import { Context } from '../index'

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid>
          <Box p={5}>
            <Button onClick={login} variant={'contained'}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login