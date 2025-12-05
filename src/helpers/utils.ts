import type { MatchDto } from '@/types/Match.types'

export function isValidMatch(match: MatchDto): boolean {
  return !!match.participant1 && !!match.participant2 && !!match.score
}
