import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const AppRouter = () => {
  const user = false

  return user
    ?
    (
      <Routes>
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<Navigate to={CHAT_ROUTE}/>} />
      </Routes>
    )
    :
    (
      <Routes>
        {privateRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>} />
      </Routes>
    )
}

export default AppRouter