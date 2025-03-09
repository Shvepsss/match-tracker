import { useState } from 'react'
import './Match.css'
import CommandIcon from '../../assets/icon.png'
import { type Match } from '../../hooks/types'
import { getStatusClass, transformMatchStatus } from '../../utils'
import { TeamInfo } from './TeamInfo'

export const MatchItem = ({
    awayScore,
    awayTeam,
    homeScore,
    homeTeam,
    status,
}: Match) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="main-container" onClick={toggleExpand}>
            <div className="match-item">
                <div className="command-item">
                    <img src={CommandIcon} className="command-image " />
                    <p>{awayTeam.name}</p>
                </div>
                <div className="score-view">
                    {awayScore} : {homeScore}
                    <div className={`status ${getStatusClass(status)}`}>
                        {transformMatchStatus(status)}
                    </div>
                </div>
                <div
                    className="command-item"
                    style={{ justifyContent: 'flex-end' }}
                >
                    <p>{homeTeam.name}</p>
                    <img src={CommandIcon} className="command-image " />
                </div>
            </div>
            {isExpanded && (
                <div className="additional-info">
                    <TeamInfo team={awayTeam} />
                    <div className="separator primary">
                        <p>VS</p>
                    </div>
                    <TeamInfo team={homeTeam} />
                </div>
            )}
        </div>
    )
}
