import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import { isValidMatch } from '@/helpers'
import { SPORTS } from '@/types/Match.types'

describe('matches - invalid cases', () => {
  it('should return false when participant1 is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant2: 'Team B',
      score: '2:1',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when participant2 is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      score: '2:1',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when score is missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when participant1 is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: '',
      participant2: 'Team B',
      score: '2:1',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when participant2 is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: '',
      score: '2:1',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when score is empty string', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '',
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should return false when all required fields are missing', () => {
    const match: MatchDto = {
      sport: SPORTS.SKI_JUMPING,
    }

    expect(isValidMatch(match)).toBe(false)
  })

  it('should filter out invalid matches from array', () => {
    const matches: MatchDto[] = [
      {
        sport: SPORTS.SOCCER,
        participant1: 'Team A',
        participant2: 'Team B',
        score: '2:1',
      },
      {
        sport: SPORTS.SOCCER,
        participant1: 'Team C',
        participant2: 'Team D',
      },
      {
        sport: SPORTS.HANDBALL,
        participant1: 'Team E',
        participant2: 'Team F',
        score: '34:26',
      },
    ]

    const validMatches = matches.filter(isValidMatch)

    expect(validMatches).toHaveLength(2)
    expect(validMatches[0].participant1).toBe('Team A')
    expect(validMatches[1].participant1).toBe('Team E')
  })
})
