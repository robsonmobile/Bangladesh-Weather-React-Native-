import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import WeatherCard from './components/WeatherCard';
import { cityNames } from './constants'; console.log(cityNames);
import axios from 'axios';

export default class App extends React.Component {
  state = {
    cityInfo: []
  }

  async componentDidMount() {
    cityNames.forEach(async city => {
      try {
        const info = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eda5b4de786c2ba53ffed2d858407139`)
        this.setState(prevState => ({
          cityInfo: prevState.cityInfo.concat({name: city, info: info.data})
        })); console.log(this.state);
      } catch (e) {
          console.log(e)
      }
    });
  }


  handleCityInfo() {
    if (this.state.cityInfo.length > 2) {
      return (
        <ScrollView style={styles.appView}>
          {this.state.cityInfo.map((city, index) => <WeatherCard key={index} city={city.name} info={city.info}/>)}
          <View style={styles.whitespace}></View>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color="#6a1b9a"/>
        </View>
      );
    }'  '}
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.statusBar}></View>
          <View style={styles.header}>
            <Text style={styles.header__text}>Bangladesh Weather</Text>
          </View>

            {this.handleCityInfo()}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },

  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#4a148c',
  },

  header: {
    height: 80,
    backgroundColor: '#6a1b9a',
  },

  header__text: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 25,
    fontWeight: 'bold'
  },

  appView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },

  whitespace: {
    height: 30
  }
});
