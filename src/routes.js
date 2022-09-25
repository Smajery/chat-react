import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts'
import Chat from './components/Chat'
import Login from './components/Login'

export const publicRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]
export const privateRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]