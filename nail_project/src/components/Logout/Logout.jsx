import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/authOperation"


export const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <>
      <button onClick={handleLogout}>Log out</button>
    </>
  )
}


