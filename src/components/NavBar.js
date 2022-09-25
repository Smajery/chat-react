import React, { useContext } from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const NavBar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  return (
    <AppBar color={'primary'} position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={'flex-end'}>
          {user
            ?
            <Button
              style={{ color: 'white' }}
              variant={'contained'}
              onClick={() => auth.signOut()}
            >
              Выйти
            </Button>
            :
            <Button
              style={{ color: 'white' }}
              variant={'contained'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Логин
            </Button>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar