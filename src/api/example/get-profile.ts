import { api } from '@/lib/axios'

interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string | null
}

export interface GetProfileResponse {
  user: User
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data.user
}
