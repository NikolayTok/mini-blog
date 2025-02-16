import { authControllerLogin, LoginInput } from '@/services/api/orval-client'

export const authService = {
  async login(data: LoginInput) {
    try {
      const response = await authControllerLogin(data)
      return response.data
    } catch (error) {
      throw error
    }
  },
}
