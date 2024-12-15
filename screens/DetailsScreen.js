import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  const releaseDate = movie.release_date || 'Unknown';
  const rating = movie.vote_average ? `${movie.vote_average}/10` : 'Not Rated';
  const certification = movie.adult ? 'R' : movie.vote_count ? 'PG-13' : 'Unrated';

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.info}>Release Date: {releaseDate}</Text>
      <Text style={styles.info}>Rating: {rating}</Text>
      <Text style={styles.info}>{certification}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: 'darkred' 
  },
  poster: { 
    width: '100%', 
    height: 300, 
    borderRadius: 5, 
    marginBottom: 15 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#fff' 
  },
  info: { 
    fontSize: 16, 
    marginBottom: 5, 
    color: '#000' 
  },
  overview: { 
    fontSize: 16, 
    lineHeight: 24,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 8
  },
});

export default DetailsScreen;
