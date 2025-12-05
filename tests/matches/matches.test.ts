import type { MatchDto, MatchOutputDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import { isValidMatch, useFormatName, useFormatScore } from '@/helpers'
import { SPORTS } from '@/types/Match.types'

describe('matches - valid cases', () => {
  it('should validate soccer match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '2:1',
    }

    expect(isValidMatch(match)).toBe(true)
  })

  it('should validate handball match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.HANDBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '34:26',
    }

    expect(isValidMatch(match)).toBe(true)
  })

  it('should validate tennis match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '2:1,7:6,6:3,6:7',
    }

    expect(isValidMatch(match)).toBe(true)
  })

  it('should validate volleyball match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.VOLLEYBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '3:0,25:23,25:19,25:21',
    }

    expect(isValidMatch(match)).toBe(true)
  })

  it('should validate basketball match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.BASKETBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: [
        ['9:7', '2:1'],
        ['5:3', '9:9'],
      ],
    }

    expect(isValidMatch(match)).toBe(true)
  })

  it('should parse valid match correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '2:1',
    }

    const name = useFormatName(match)
    const score = useFormatScore(match)
    const parsedMatch: MatchOutputDto = { name, score }

    expect(parsedMatch).toEqual({
      name: 'Team A - Team B',
      score: '2:1',
    })
  })

  it('should parse multiple valid matches correctly', () => {
    const matches: MatchDto[] = [
      {
        sport: SPORTS.SOCCER,
        participant1: 'Team A',
        participant2: 'Team B',
        score: '2:1',
      },
      {
        sport: SPORTS.HANDBALL,
        participant1: 'Team C',
        participant2: 'Team D',
        score: '34:26',
      },
    ]

    const parsedMatches: MatchOutputDto[] = matches
      .filter(isValidMatch)
      .map((match: MatchDto): MatchOutputDto => ({
        name: useFormatName(match),
        score: useFormatScore(match),
      }))

    expect(parsedMatches).toHaveLength(2)

    expect(parsedMatches[0]).toEqual({
      name: 'Team A - Team B',
      score: '2:1',
    })

    expect(parsedMatches[1]).toEqual({
      name: 'Team C vs Team D',
      score: '34:26',
    })
  })
})
