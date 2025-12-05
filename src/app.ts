import type { MatchDto, MatchOutputDto } from '@/types/Match.types'
import MATCHES_DATA from '@/data/matches'
import { useFormatName, useFormatScore } from '@/helpers'
import { NO_VALID_MATCHES_MESSAGE } from '@/consts/invalidts.consts'

const validMatches: MatchDto[] = MATCHES_DATA.filter(isValidMatch)
const parsedMatches: MatchOutputDto[] = []

function isValidMatch(match: MatchDto): boolean {
  return !!match.participant1 && !!match.participant2 && !!match.score
}

if (validMatches.length === 0) {
  console.error(NO_VALID_MATCHES_MESSAGE)
}

for (const match of validMatches) {
  const name = useFormatName(match)
  const score = useFormatScore(match)
  parsedMatches.push({ name, score })
}

console.log(parsedMatches)
