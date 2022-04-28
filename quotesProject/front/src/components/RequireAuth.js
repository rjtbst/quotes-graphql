
import { Navigate } from 'react-router-dom'
import { useAuth } from '../newContext/auth'

const RequireAuth = ({children}) => {
  const auth = useAuth()
    console.log(auth.user);
    if(!auth.user){
    return <Navigate to='/login'/>
    }
  return children
}

export default RequireAuth