import type { MatchDto } from '@/types/Match.types'
import { describe, expect, it } from 'vitest'
import useFormatName from '@/helpers/formatName'
import { SPORTS } from '@/types/Match.types'

describe('useFormatName - valid cases', () => {
  it('should format soccer name with dash separator', () => {
    const match: MatchDto = {
      sport: SPORTS.SOCCER,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1',
    }

    expect(useFormatName(match)).toBe('Team A - Team B')
  })

  it('should format volleyball name with dash separator', () => {
    const match: MatchDto = {
      sport: SPORTS.VOLLEYBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1,2:2,3:3,4:4',
    }

    expect(useFormatName(match)).toBe('Team A - Team B')
  })

  it('should format handball name with vs separator', () => {
    const match: MatchDto = {
      sport: SPORTS.HANDBALL,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1,2:2,3:3,4:4',
    }

    expect(useFormatName(match)).toBe('Team A vs Team B')
  })

  it('should format tennis name with vs separator', () => {
    const match: MatchDto = {
      sport: SPORTS.TENNIS,
      participant1: 'Team A',
      participant2: 'Team B',
      score: '1:1,2:2,3:3,4:4',
    }

    expect(useFormatName(match)).toBe('Team A vs Team B')
  })
})
