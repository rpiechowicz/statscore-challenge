import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import { INVALID_MATCH_MESSAGE } from '@/consts/invalid.consts'
import formatMatchName from '@/helpers/formatName'
import { SPORTS } from '@/types/Match.types'

describe('formatMatchName - invalid cases', () => {
  it('should return invalid message when participant1 is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant2: 'Team A',
      score: '2:1',
    }

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when participant2 is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      score: '2:1',
    }

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when both participants are missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SKI_JUMPING,
    }

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message for unknown sport', () => {
    const match = {
      sport: 'unknown-sport',
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:0',
    } as unknown as MatchDto

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when participant1 is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: '',
      participant2: 'Team B',
      score: '2:1',
    }

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })

  it('should return invalid message when participant2 is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: '',
      score: '2:1',
    }

    expect(formatMatchName(match)).toBe(INVALID_MATCH_MESSAGE)
  })
})
