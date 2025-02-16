/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * ThinkEasy
 * Test Task BE
 * OpenAPI spec version: 1.0
 */
export interface SignupInput {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RefreshTokenInput {
  token: string;
}

export interface RefreshResponceModel {
  access_token: string;
}

export interface CreatePostInput {
  content: string;
  title: string;
}

export type PostResponceContent = { [key: string]: unknown };

export type PostResponceAuthor = { [key: string]: unknown };

export interface PostResponce {
  title: string;
  content: PostResponceContent;
  published: boolean;
  author: PostResponceAuthor;
}

export interface PostResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}



/**
 * @summary Signup a new user
 */
export type authControllerSignupResponse = {
  data: Auth;
  status: number;
  headers: Headers;
}

export const getAuthControllerSignupUrl = () => {


  return `https://frontend-test-be.stage.thinkeasy.cz/auth/signup`
}

export const authControllerSignup = async (signupInput: SignupInput, options?: RequestInit): Promise<authControllerSignupResponse> => {
  
  const res = await fetch(getAuthControllerSignupUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      signupInput,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: authControllerSignupResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as authControllerSignupResponse
}



/**
 * @summary Login an existing user
 */
export type authControllerLoginResponse = {
  data: Auth;
  status: number;
  headers: Headers;
}

export const getAuthControllerLoginUrl = () => {


  return `https://frontend-test-be.stage.thinkeasy.cz/auth/login`
}

export const authControllerLogin = async (loginInput: LoginInput, options?: RequestInit): Promise<authControllerLoginResponse> => {
  
  const res = await fetch(getAuthControllerLoginUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      loginInput,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: authControllerLoginResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as authControllerLoginResponse
}



/**
 * @summary Refresh access token using a refresh token
 */
export type authControllerRefreshTokenResponse = {
  data: RefreshResponceModel;
  status: number;
  headers: Headers;
}

export const getAuthControllerRefreshTokenUrl = () => {


  return `https://frontend-test-be.stage.thinkeasy.cz/auth/refresh-token`
}

export const authControllerRefreshToken = async (refreshTokenInput: RefreshTokenInput, options?: RequestInit): Promise<authControllerRefreshTokenResponse> => {
  
  const res = await fetch(getAuthControllerRefreshTokenUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      refreshTokenInput,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: authControllerRefreshTokenResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as authControllerRefreshTokenResponse
}



/**
 * @summary Create a new post
 */
export type postsControllerCreateResponse = {
  data: PostResponce;
  status: number;
  headers: Headers;
}

export const getPostsControllerCreateUrl = () => {


  return `https://frontend-test-be.stage.thinkeasy.cz/posts`
}

export const postsControllerCreate = async (createPostInput: CreatePostInput, options?: RequestInit): Promise<postsControllerCreateResponse> => {
  
  const res = await fetch(getPostsControllerCreateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createPostInput,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: postsControllerCreateResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as postsControllerCreateResponse
}



/**
 * @summary Get all posts
 */
export type postsControllerGetAllPostsResponse = {
  data: PostResponse[];
  status: number;
  headers: Headers;
}

export const getPostsControllerGetAllPostsUrl = () => {


  return `https://frontend-test-be.stage.thinkeasy.cz/posts`
}

export const postsControllerGetAllPosts = async ( options?: RequestInit): Promise<postsControllerGetAllPostsResponse> => {
  
  const res = await fetch(getPostsControllerGetAllPostsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: postsControllerGetAllPostsResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as postsControllerGetAllPostsResponse
}



/**
 * @summary Get all posts of a user
 */
export type postsControllerUserPostsResponse = {
  data: PostResponse[];
  status: number;
  headers: Headers;
}

export const getPostsControllerUserPostsUrl = (userId: string,) => {


  return `https://frontend-test-be.stage.thinkeasy.cz/posts/user/${userId}`
}

export const postsControllerUserPosts = async (userId: string, options?: RequestInit): Promise<postsControllerUserPostsResponse> => {
  
  const res = await fetch(getPostsControllerUserPostsUrl(userId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: postsControllerUserPostsResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as postsControllerUserPostsResponse
}



/**
 * @summary Get a post by its ID
 */
export type postsControllerPostResponse = {
  data: PostResponse;
  status: number;
  headers: Headers;
}

export const getPostsControllerPostUrl = (postId: string,) => {


  return `https://frontend-test-be.stage.thinkeasy.cz/posts/${postId}`
}

export const postsControllerPost = async (postId: string, options?: RequestInit): Promise<postsControllerPostResponse> => {
  
  const res = await fetch(getPostsControllerPostUrl(postId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: postsControllerPostResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as postsControllerPostResponse
}



