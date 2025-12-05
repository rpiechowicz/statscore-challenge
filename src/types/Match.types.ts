export const SPORTS = {
  SOCCER: 'soccer',
  VOLLEYBALL: 'volleyball',
  HANDBALL: 'handball',
  BASKETBALL: 'basketball',
  TENNIS: 'tennis',
  SKI_JUMPING: 'ski jumping',
} as const

export type SportDto = (typeof SPORTS)[keyof typeof SPORTS]

export interface MatchDto {
  sport: SportDto
  participant1?: string
  participant2?: string
  score?: string | string[][]
}

export interface MatchOutputDto {
  name: string
  score: string
}
