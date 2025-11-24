import { useQueryCharacter } from '@/hooks/useQueryCharacter'
import { Character } from '@/interface/Character'
import { createContext, useContext } from 'react'
import { Text } from 'react-native'

const defaultValue = {
  resources: {
    data: [] as Character[],
    isLoading: false,
    isError: false,
  },
}

export const CharacterContext = createContext(defaultValue)

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data, isLoading, isError } = useQueryCharacter()

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>Error loading characters.</Text>
  if (!data.length) return <Text>No characters found.</Text>

  return (
    <CharacterContext.Provider
      value={{
        resources: {
          data,
          isLoading,
          isError,
        },
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterProvider = () => {
  const characterContext = useContext(CharacterContext)
  return characterContext
}
