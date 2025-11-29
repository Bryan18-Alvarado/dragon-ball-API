import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  characterImg: string;
  name: string;
  ki: string;
  id: number,
  number: string;
  borderColor: string;
  backgroundColor: string;
}

export default function CharacterCard({
  characterImg,
  ki,
  id,
  name,
  number,
  borderColor,
  backgroundColor,
}: Props) {
  console.log(characterImg);

  return (
    <View style={styles.card}>
      {id === 1 || id === 3 || id === 4 ||id === 10 ? (
    <Image
        source={require('./../assets/images/dgball.jpg')}
        style={styles.cardHeader}
        resizeMode="cover"
      />
      )  
      :    (
         <Image
        source={require("./../assets/images/dbball2.jpg")}
        style={styles.cardHeader}
        resizeMode="cover"
      />
      ) }

      <View style={styles.cardBody}>
        <View
          style={[
            styles.imageWrapper,
            {
              borderColor,
              backgroundColor,
              shadowColor: borderColor,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Image
            source={{ uri: characterImg }}
            style={styles.characterImg}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.cardTitle}>
          {name} <Text style={styles.cardSpan}>#{number}</Text>
        </Text>

        <Text style={styles.cardText}>Collectable</Text>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.cardPower}>
          <View style={{display:"flex", flexDirection:'row' , justifyContent:"center", alignItems:"center", gap:5}}>
            <Text style={styles.footerTitle}>Ki</Text>
            <Image
              source={require("./../assets/images/ki.png")}
              style={styles.icon}
            />
          </View>
          <Text>{ki}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: 328,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
    marginBottom:25
  },
  cardHeader: {
    width: "100%",
    height: 110,
  },
  cardBody: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FCB173",
    paddingBottom: 20,
  },
  imageWrapper: {
    borderWidth: 5,
    borderRadius: 999,
    marginTop: -50,
    padding: 10,
    elevation: 10,
    width: 150,
    height: 150,
  },
  characterImg: {
    width: 200,
    height: 200,
  },
  cardTitle: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSpan: {
    color: "#FCB173",
  },
  cardText: {
    fontSize: 14,
    marginTop: 5,
    color: "#444",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  cardPower: {
    alignItems: "center",
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
