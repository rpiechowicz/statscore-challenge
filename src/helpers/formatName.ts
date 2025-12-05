import type { MatchDto } from '@/types/Match.types'
import { INVALID_MATCH_MESSAGE } from '@/consts/invalidts.consts'
import { SPORTS } from '@/types/Match.types'

export default function useFormatName(match: MatchDto): string {
  if (!match.participant1 || !match.participant2) {
    return INVALID_MATCH_MESSAGE
  }

  switch (match.sport) {
    case SPORTS.SOCCER:
    case SPORTS.VOLLEYBALL:
    case SPORTS.BASKETBALL:
      return `${match.participant1} - ${match.participant2}`
    case SPORTS.HANDBALL:
    case SPORTS.TENNIS:
    case SPORTS.SKI_JUMPING:
      return `${match.participant1} vs ${match.participant2}`
    default:
      return INVALID_MATCH_MESSAGE
  }
}
