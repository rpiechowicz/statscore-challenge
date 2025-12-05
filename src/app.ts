import type { MatchDto, MatchOutputDto } from '@/types/Match.types'
import MATCHES_DATA from '@/data/matches'
import { isValidMatch, formatMatchName, formatMatchScore } from '@/helpers'
import { INVALID_MATCHES_DATA_MESSAGE, NO_VALID_MATCHES_MESSAGE } from '@/consts/invalid.consts'

function main(): void {
  if (MATCHES_DATA.length === 0) {
    console.error(INVALID_MATCHES_DATA_MESSAGE)
    return
  }

  const validMatches: MatchDto[] = MATCHES_DATA.filter(isValidMatch)

  if (validMatches.length === 0) {
    console.error(NO_VALID_MATCHES_MESSAGE)
    return
  }

  const parsedMatches: MatchOutputDto[] = validMatches.map((match: MatchDto) => ({
    name: formatMatchName(match),
    score: formatMatchScore(match),
  }))

  console.log(parsedMatches)
}

main()
