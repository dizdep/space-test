export const Token = {
  ACCESS: 'accessToken',
  REFRESH: 'refreshToken'
} as const

export type Token = (typeof Token)[keyof typeof Token]
