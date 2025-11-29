import { useCharacterProvider } from "@/context/CharacterProvider";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CharacterCard from "./CharacterCard";

export const CharacterList = () => {
  const { resources } = useCharacterProvider();
  console.log(resources.data[0]);

  return (
        <View style={style.container} >
          
        <ScrollView>
          <Text style={style.title}>Dragon Ball Characters</Text>
          <View style={{gap:"30"}}>
            
          {resources.data.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              characterImg={character.image || ''}
              name={character.name}
              ki={character.ki}
              number={character.id.toString()}
            />
          ))}
          </View>
        </ScrollView>
        </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    color: "#511c1cff",
  },
  text: {
    fontSize: 14,
  },
});
