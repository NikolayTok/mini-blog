import { useSetRecoilState } from 'recoil'
import { LoginInput } from '../api/orval-client'
import { userState } from '@/store/userState'
import { toast } from 'react-toastify'
import { authService } from './authService'
import { tokenState } from '@/store/tokenState'

export const useAuth = () => {
  const setUser = useSetRecoilState(userState);
  const setToken = useSetRecoilState(tokenState);
  
  const login = async (data: LoginInput) => {
    try {
      const { accessToken, user } = await authService.login(data);
      setToken(accessToken); 
      setUser(user);
    } catch {
      toast.error('Error loading!');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return { login, logout };
};
