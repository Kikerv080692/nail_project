import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/authOperation"
import * as SC from './Logout.styled'

export const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <>
      <SC.Button onClick={handleLogout}>Log out</SC.Button>
    </>
  )
}


