import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import { INVALID_MATCH_MESSAGE, INVALID_SCORE_MESSAGE } from '@/consts/invalid.consts'
import formatMatchScore from '@/helpers/formatScore'
import { SPORTS } from '@/types/Match.types'

describe('formatMatchScore - invalid cases', () => {
  it('should return invalid message when score is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when score is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '',
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message for unknown sport', () => {
    const match = {
      sport: 'unknown-sport',
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:0',
    } as unknown as MatchDto

    expect(formatMatchScore(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when tennis score has invalid format', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: 'invalid-format',
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when volleyball score has invalid format', () => {
    const match: MatchDto = {
      sport: SPORTS.VOLLEYBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: 'not-valid-score',
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when tennis score has too few sets', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '2:1,7:6',
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when basketball score is not an array', () => {
    const match: MatchDto = {
      sport: SPORTS.BASKETBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: 'not-an-array' as unknown as string[][],
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when basketball score is empty array', () => {
    const match: MatchDto = {
      sport: SPORTS.BASKETBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: [],
    }

    expect(formatMatchScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })
})
