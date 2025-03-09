import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { useFetchMatchData } from './hooks/useFetchMatchData'
import { MatchItem } from './components/Match/Match'
import { Header } from './components/Header/Header'
import { MatchStatus } from './hooks/types'
import { ClipLoader } from 'react-spinners'

function App() {
    const { matches, loadMatches, loading, error } = useFetchMatchData()
    const [statusFilter, setStatusFilter] = useState<MatchStatus | undefined>(
        undefined
    )
    useEffect(() => {
        loadMatches()
    }, [])
    const filteredMatches = useMemo(() => {
        return matches.filter((match) => {
            if (!statusFilter) return true
            return match.status === statusFilter
        })
    }, [matches, statusFilter])

    return (
        <div className="App">
            <Header
                error={error}
                loadMatches={loadMatches}
                setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}
            />
            <div className="matches-container">
                {loading && (
                    <div className="loader">
                        <ClipLoader color="white" />
                    </div>
                )}
                {!loading && !error && matches.length > 0
                    ? filteredMatches.map((match, index) => (
                          <MatchItem key={index} {...match} />
                      ))
                    : !loading && !error && <p>Нет матчей для отображения</p>}
            </div>
        </div>
    )
}

export default App
