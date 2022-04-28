
import { Navigate } from 'react-router-dom'
import { useAuth } from '../newContext/auth'

const AfterRoute = ({children}) => {
    
    const auth = useAuth()
    if(auth.user){
        return <Navigate to='/'/>
   }
    return children
    
}

export default AfterRoute