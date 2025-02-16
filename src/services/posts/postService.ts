import {
  postsControllerUserPosts,
  postsControllerCreate,
  CreatePostInput,
  postsControllerGetAllPosts,
} from '@/services/api/orval-client'

const getAuthHeader = (token: string) => {
  return { Authorization: `Bearer ${token}` }
}

export const postService = {
  async fetchPosts(userId?: string, token?: string) {
    try {
      const headers = token ? getAuthHeader(token) : undefined;

    const response = userId
      ? await postsControllerUserPosts(userId, { headers })
      : await postsControllerGetAllPosts();

    return response.data;

    } catch (error) {
      throw error
    }
  },

  async createPost(data: CreatePostInput) {
    try {
      await postsControllerCreate(data)
    } catch (error) {
      throw error
    }
  },
}
