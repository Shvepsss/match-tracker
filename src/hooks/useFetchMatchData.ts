import { useState } from 'react'
import { Match } from './types'

const API_URL = 'https://app.ftoyd.com/fronttemp-service'
export const useFetchMatchData = () => {
    const [matches, setMatches] = useState<Match[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const loadMatches = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`${API_URL}/fronttemp`)
            if (!response.ok) {
                throw new Error('Ошибка: не удалось загрузить информацию')
            }
            const dataResponse = await response.json()
            console.log(dataResponse)
            const matches: Match[] = dataResponse.data.matches
            setMatches(matches)
        } catch (err) {
            setError('Ошибка: не удалось загрузить информацию')
        } finally {
            setLoading(false)
        }
    }
    return { loadMatches, error, matches, loading }
}
