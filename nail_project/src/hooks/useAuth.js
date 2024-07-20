import {useSelector} from 'react-redux'
import { selectEmail, selectIsLoggedIn, selectIsRefreshing, selectName, selectToken } from '../redux/selectors/selectors'


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)
    const token = useSelector(selectToken)
    const name = useSelector(selectName)
    const email = useSelector(selectEmail)
    return {
        isLoggedIn, isRefreshing, token, name, email
    }
}