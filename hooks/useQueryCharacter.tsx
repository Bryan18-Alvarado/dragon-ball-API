import { API_URL } from '@/config/config'
import { Character } from '@/interface/Character'
import { useQuery } from '@tanstack/react-query'

export const useQueryCharacter = () => {
  const getCharacter = async () => {
    try {
      const response = await fetch(`${API_URL}/characters`)
      return (await response.json()) as Character[]
    } catch (error) {
      console.log('error fetching', error)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacter,
  })
  return { data, isLoading, isError }
}
