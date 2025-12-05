import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import { INVALID_MATCH_MESSAGE, INVALID_SCORE_MESSAGE } from '@/consts/invalidts.consts'
import useFormatScore from '@/helpers/formatScore'
import { SPORTS } from '@/types/Match.types'

describe('useFormatScore - invalid cases', () => {
  it('should return invalid message when score is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
    }

    expect(useFormatScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when score is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '',
    }

    expect(useFormatScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message for unknown sport', () => {
    const match = {
      sport: 'unknown-sport',
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:0',
    } as unknown as MatchDto

    expect(useFormatScore(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when tennis score has invalid format', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: 'invalid-format',
    }

    expect(useFormatScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when volleyball score has invalid format', () => {
    const match: MatchDto = {
      sport: SPORTS.VOLLEYBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: 'not-valid-score',
    }

    expect(useFormatScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })

  it('should return invalid message when tennis score has too few sets', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '2:1,7:6',
    }

    expect(useFormatScore(match)).toBe(INVALID_SCORE_MESSAGE)
  })
})
