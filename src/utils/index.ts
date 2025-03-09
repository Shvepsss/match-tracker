import { MatchStatus } from '../hooks/types'

export const transformMatchStatus = (status: MatchStatus): string => {
    switch (status) {
        case MatchStatus.Ongoing:
            return 'Live'
        case MatchStatus.Finished:
            return 'Finished'
        case MatchStatus.Scheduled:
            return 'Match preparing'
    }
}
export const getStatusClass = (status: MatchStatus): string =>
    ({
        [MatchStatus.Ongoing]: 'status-live',
        [MatchStatus.Finished]: 'status-finished',
        [MatchStatus.Scheduled]: 'status-scheduled',
    })[status] || ''
