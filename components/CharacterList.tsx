import { useCharacterProvider } from '@/context/CharacterProvider'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

export const CharacterList = () => {
  const { resources } = useCharacterProvider()

  return (
    <View>
      <FlatList
        data={resources.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Text>nombre: {item.name}</Text>
            <Text>ki: {item.ki}</Text>
            <Text>max ki: {item.maxKi}</Text>
            <Text>race: {item.race}</Text>
            <Text>gender: {item.gender}</Text>
          </View>
        )}
      />
    </View>
  )
}
