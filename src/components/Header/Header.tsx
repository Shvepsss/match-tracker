import RefreshIcon from '../../assets/refresh.png'
import AlertIcon from '../../assets/alert.png'
import './Header.css'
import { MatchStatus } from '../../hooks/types'

type HeaderProps = {
    error: string | null
    loadMatches: () => void
    statusFilter: MatchStatus | undefined
    setStatusFilter: (status: MatchStatus) => void
}
export const Header = ({
    error,
    loadMatches,
    statusFilter,
    setStatusFilter,
}: HeaderProps) => {
    return (
        <header className="header">
            <div className="left-side">
                <p className="title">Match tracker</p>
                <div className="filter-container">
                    <select
                        value={statusFilter}
                        style={{
                            color: '#B4B5B6',
                            borderWidth: 0,
                            width: '100%',
                            backgroundColor: '#0B0E12',
                        }}
                        onChange={(e) =>
                            setStatusFilter(e.target.value as MatchStatus)
                        }
                    >
                        <option value="">Все статусы</option>
                        <option value={MatchStatus.Scheduled}>
                            Запланированы
                        </option>
                        <option value={MatchStatus.Ongoing}>В процессе</option>
                        <option value={MatchStatus.Finished}>Завершены</option>
                    </select>
                </div>
            </div>
            <div className="right-side">
                {error && (
                    <div className="error-container">
                        <img src={AlertIcon} className="error-image"></img>
                        <p>{error}</p>
                    </div>
                )}
                <button className="refresh-button" onClick={loadMatches}>
                    <p>Обновить</p>
                    <img src={RefreshIcon}></img>
                </button>
            </div>
        </header>
    )
}
