import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import useFormatScore from '@/helpers/formatScore'
import { SPORTS } from '@/types/Match.types'

describe('useFormatScore - valid cases', () => {
  it('should format soccer score correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1',
    }

    expect(useFormatScore(match)).toBe('1:1')
  })

  it('should format handball score correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.HANDBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '10:20',
    }

    expect(useFormatScore(match)).toBe('10:20')
  })

  it('should format tennis score with sets correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1,2:2,3:3,4:4',
    }

    expect(useFormatScore(match)).toBe('Main score: 1:1 (set1 2:2, set2 3:3, set3 4:4)')
  })

  it('should format volleyball score with sets correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.VOLLEYBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '3:0,25:23,25:19,25:21',
    }

    expect(useFormatScore(match)).toBe('Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)')
  })

  it('should format basketball score correctly', () => {
    const match: MatchDto = {
      sport: SPORTS.BASKETBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: [
        ['9:7', '2:1'],
        ['5:3', '9:9'],
      ],
    }

    expect(useFormatScore(match)).toBe('9:7,2:1,5:3,9:9')
  })
})
