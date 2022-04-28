import { useEffect } from 'react';
import { isEqual } from 'lodash';
import { useAuthContext } from './useAuthContext';
import useLocalStorage from './useLocalStorage';



const useAuth = () => {
    const { user, setUser } = useAuthContext();
    const [userData] = useLocalStorage('token', '');
    // Keep user in context in sync with user in local storage.
    const syncUser = () => {
      if (typeof window === `undefined`) return;
      if (!userData?.token || isEqual(user.token, userData.token)) {
        // user and user in localStorage are equal. No syncing necessary
        return;
      }
      // Syncing user and user in localstorage now
      setUser(userData);
    };
  
    useEffect(syncUser, 
      // eslint-disable-next-line 
      []);
  
    return { isLoggedIn: !!user.token, syncUser };
  };
  
  export default useAuth;
  