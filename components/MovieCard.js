import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {movie.release_date || "Unknown Release Date"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 120,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 5,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 6,
    color: "#555",
    textAlign: "center",
  },
});

export default MovieCard;
