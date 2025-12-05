import type { MatchDto } from '@/types/Match.types'
import { SPORTS } from '@/types/Match.types'

const MATCHES_DATA: MatchDto[] = [
  {
    sport: SPORTS.SOCCER,
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  },
  {
    sport: SPORTS.VOLLEYBALL,
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  },
  {
    sport: SPORTS.HANDBALL,
    participant1: 'Pogoń Szczeciń',
    participant2: 'Azoty Puławy',
    score: '34:26',
  },
  {
    sport: SPORTS.BASKETBALL,
    participant1: 'GKS Tychy',
    participant2: 'GKS Katowice',
    score: [
      ['9:7', '2:1'],
      ['5:3', '9:9'],
    ],
  },
  {
    sport: SPORTS.TENNIS,
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  },
  {
    sport: SPORTS.SKI_JUMPING,
  },
]

export default MATCHES_DATA
