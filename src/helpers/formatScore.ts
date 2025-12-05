import type { MatchDto } from '@/types/Match.types'
import { INVALID_MATCH_MESSAGE, INVALID_SCORE_MESSAGE } from '@/consts/invalidts.consts'
import { MATCH_SCORE_REGEXP } from '@/consts/regexp.consts'
import { SPORTS } from '@/types/Match.types'

export default function useFormatScore(match: MatchDto): string {
  if (!match.score) {
    return INVALID_SCORE_MESSAGE
  }

  switch (match.sport) {
    case SPORTS.SOCCER:
    case SPORTS.HANDBALL:
      return formatSimpleScore(match.score as string)
    case SPORTS.TENNIS:
    case SPORTS.VOLLEYBALL:
      return formatScoreWithSets(match.score as string)
    case SPORTS.BASKETBALL:
      return formatScoreWithMatches(match.score as string[][])
    default:
      return INVALID_MATCH_MESSAGE
  }
}

function formatSimpleScore(score: string): string {
  return score
}

function formatScoreWithMatches(score: string[][]): string {
  return score.map((match: string[]) => match.join(',')).join(',')
}

function formatScoreWithSets(score: string): string {
  const validScores = MATCH_SCORE_REGEXP.exec(score)

  if (!validScores) {
    return INVALID_SCORE_MESSAGE
  }

  const mainScore = validScores[1]
  const scores = score.split(',')
  const sets = new Map<number, { set: string, score: string }>()

  for (const [index, matchScore] of scores.entries()) {
    const [set, score] = matchScore.split(':')
    sets.set(index + 1, { set, score })
  }

  const scoresMessage = Array.from(sets.entries())
    .slice(1, sets.size)
    .map(([setNumber, { set, score }]) => `set${setNumber - 1} ${set}:${score}`)
    .join(', ')

  return `Main score: ${mainScore} (${scoresMessage})`
}
