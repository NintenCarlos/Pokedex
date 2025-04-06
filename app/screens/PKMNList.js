import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


const pokemonList = [
   {
      name: "Turtwig",
      id: "#387",
      types: ["Planta"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/turtwig.png",
      backgroundColor: "green",
   },
   {
      name: "Grotle",
      id: "#388",
      types: ["Planta"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/grotle.png",
      backgroundColor: "green",
   },
   {
      name: "Torterra",
      id: "#389",
      types: ["Planta", "Tierra"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/torterra.png",
      backgroundColor: "green",
   },
   {
      name: "Chimchar",
      id: "#390",
      types: ["Fuego"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/chimchar.png",
      backgroundColor: "red",
   },
   {
      name: "Monferno",
      id: "#391",
      types: ["Fuego", "Lucha"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/monferno.png",
      backgroundColor: "red",
   },
   {
      name: "Infernape",
      id: "#392",
      types: ["Fuego", "Lucha"],
      image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/infernape.png",
      backgroundColor: "red",
   },
];

export default function PokemonList() {
    const navigation = useNavigation();

   return (
      <ScrollView style={styles.container}>
         {pokemonList.map((pokemon, index) => (
            <Pressable key={index} style={styles.card} onPress={() => navigation.navigate("Unique")}  >
               <View style={styles.infoContainer}>
                  <Text style={styles.name}>{pokemon.name}</Text>
                  <Text style={styles.id}>{pokemon.id}</Text>
                  <View style={styles.tags}>
                     {pokemon.types.map((type, idx) => (
                        <View
                           key={idx}
                           style={[
                              styles.type,
                              { backgroundColor: typeColor(type) },
                           ]}
                        >
                           <Text style={styles.typeText}>{type}</Text>
                        </View>
                     ))}
                  </View>
               </View>
               <View
                  style={[
                     styles.imageContainer,
                     { backgroundColor: pokemon.backgroundColor },
                  ]}
               >
                  <Image source={{ uri: pokemon.image }} style={styles.image} />
               </View>
            </Pressable>
         ))}
      </ScrollView>
   );
}

// Puedes definir colores personalizados para cada tipo
const typeColor = (type) => {
   switch (type) {
      case "Planta":
         return "green";
      case "Tierra":
         return "burlywood";
      case "Fuego":
         return "red";
      case "Lucha":
         return "orange";
      default:
         return "gray";
   }
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#c9c5c5",
      padding: 10,
   },
   card: {
      flexDirection: "row",
      marginVertical: 8,
      borderRadius: 15,
      overflow: "hidden",
   },
   infoContainer: {
      backgroundColor: "white",
      width: "40%",
      padding: 10,
      justifyContent: "center",
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
   },
   name: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
   },
   id: {
      fontSize: 16,
      color: "#505050",
      marginBottom: 8,
   },
   tags: {
      flexDirection: "row",
      flexWrap: "wrap",
   },
   type: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 15,
      marginRight: 5,
      marginBottom: 5,
   },
   typeText: {
      color: "white",
      fontWeight: "bold",
   },
   imageContainer: {
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
   },
   image: {
      width: 100,
      height: 100,
      resizeMode: "contain",
   },
});
