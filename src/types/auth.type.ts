import { Token } from '@/types/enums.ts'

export type Auth = {
  [Token.ACCESS]: string
  [Token.REFRESH]: string
  email: string
  firstName: string
  gender: string
  id: number
  image: string
  lastName: string
  username: string
}
