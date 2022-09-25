import React from 'react'
import classes from './Loader.module.css'
import { Container, Grid } from '@mui/material'

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid>
          <span className={classes.loader}></span>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader