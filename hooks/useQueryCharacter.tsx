import { API_URL } from '@/config/config'
import { useQuery } from '@tanstack/react-query'

export const useQueryCharacter = () => {
  const getCharacter = async () => {
    try {
      const response = await fetch(`${API_URL}/characters`)
      const data = await response.json()
      return data.items
    } catch (error) {
      console.log('error fetching', error)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacter,
  })
  return {
    data: data ?? [],
    isLoading,
    isError,
  }
}
