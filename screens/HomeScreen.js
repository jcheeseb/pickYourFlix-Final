import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const TMDB_API_KEY = "b46d94d1a528a7abd809138195c2b403";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
      );
      setMovies(response.data.results.slice(0, 9));
    } catch (error) {
      console.error(error);
    }
  };

  const searchMovies = async () => {
    if (searchQuery.trim() === "") return;
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${searchQuery}`
      );
      setMovies(response.data.results.slice(0, 9));
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovie = ({ item }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate("Details", { movie: item })}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "darkred",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  movieList: { paddingBottom: 30 },
});

export default HomeScreen;
