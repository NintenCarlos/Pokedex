import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Unique() {
  const stats = [
    { label: "HP", value: 70 },
    { label: "ATK", value: 135 },
    { label: "DEF", value: 105 },
    { label: "SPA", value: 60 },
    { label: "SPD", value: 105 },
    { label: "VEL", value: 20 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.head}>
        <Text style={styles.arrow}>&#x2190;</Text>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>Escavalier</Text>
        </View>

        <Text style={styles.id}>#589</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.arrow}>&#x2190;</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: "https://img.pokemondb.net/sprites/scarlet-violet/icon/escavalier.png",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.arrow}>&#x2192;</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.tags}>
          <Text style={[styles.tag, { backgroundColor: "greenyellow" }]}>
            Bicho
          </Text>
          <Text style={[styles.tag, { backgroundColor: "#b0b0b0" }]}>
            Acero
          </Text>
        </View>

        <Text style={styles.statsTitle}>Estadísticas Base</Text>

        {stats.map((stat, index) => (
          <View key={index} style={styles.statRow}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statLabel}>{stat.value}</Text>
            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${(stat.value / 255) * 100}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "greenyellow",
    flexGrow: 1,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  arrow: {
    fontSize: 30,
    color: "white",
  },
  nameContainer: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  name: {
    color: "greenyellow",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  id: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    margin: 10,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "black",
  },
  footer: {
    marginTop: -40,
    padding: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginVertical: 10,
  },
  tag: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    marginVertical: 15,
  },
  statRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  statLabel: {
    width: 50,
    fontSize: 14,
    fontWeight: "bold",
  },
  progressBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "greenyellow",
  },
});
