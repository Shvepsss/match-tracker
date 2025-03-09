import { Team } from '../../hooks/types'
import { PlayerItem } from '../Player/Player'
import { StatRow } from './StatRow'
import './Match.css'
type TeamInfoProps = {
    team: Team
}
export const TeamInfo = ({ team }: TeamInfoProps) => {
    return (
        <div className="container">
            <div className="team-info">
                {team.players.map((player) => (
                    <PlayerItem {...player} />
                ))}
            </div>
            <div className="match-info">
                <StatRow label="Points" value={team.points} />
                <div className="divider"></div>
                <StatRow label="Место" value={team.place} />
                <div className="divider"></div>
                <StatRow label="Всего убийств" value={team.total_kills} />
            </div>
        </div>
    )
}
