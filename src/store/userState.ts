import { User } from '@/types/User'
import { atom } from 'recoil'

export const userState = atom<User | null>({
  key: 'userState',
  default: null
})
