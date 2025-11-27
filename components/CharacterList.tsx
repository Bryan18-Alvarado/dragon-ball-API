import { useCharacterProvider } from '@/context/CharacterProvider'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export const CharacterList = () => {
  const { resources } = useCharacterProvider()

  return (
    <View>
      <FlatList
        data={resources.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.container}>
            <Text style={style.title}>nombre:</Text>
            <Text>{item.name}</Text>
            <Text style={style.title}>ki:</Text>
            <Text>{item.ki}</Text>
            <Text style={style.title}>max ki:</Text>
            <Text>{item.maxKi}</Text>
            <Text style={style.title}>race:</Text>
            <Text>{item.race}</Text>
            <Text style={style.title}>gender:</Text>
            <Text>{item.gender}</Text>
          </View>
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
})
