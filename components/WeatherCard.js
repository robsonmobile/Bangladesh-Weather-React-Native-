import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ActivityIndicator } from 'react-native';

const weatherCard = props => (
  <TouchableWithoutFeedback>
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.header__cityName}>{props.city}</Text>
        <Text style={styles.header__temperature}>{props.info.main.temp}°C</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{uri: `http://openweathermap.org/img/w/${props.info.weather[0].icon}.png`}}
          style={styles.weatherIcon}
          />
        <Text style={styles.weatherStatusText}>{props.info.weather[0].main}</Text>
        <Text style={styles.humidityText}>Humidity: {props.info.main.humidity}%</Text>
        <Text style={styles.windText}>Wind: {props.info.wind.speed} m/s</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default weatherCard;


const styles = StyleSheet.create({
  card: {
    height: 215,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
    backgroundColor: '#fff',
    elevation: 15
  },

  header: {
    backgroundColor: '#6a1b9a',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header__cityName: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20
  },

  header__temperature: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 20
  },

  content: {
    backgroundColor: '#fff',
    flex: 5
  },

  weatherIcon: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 20,
    left: 20
  },

  weatherStatusText: {
    color: '#4a148c',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    top: 90,
    left: 30
  },

  humidityText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    right: 20
  },

  windText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 68,
    right: 20
  }
});
