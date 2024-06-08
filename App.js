import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MainCard from './components/MainCard'



export default function App(){

  const [darkTheme, setDarkTheme] = useState(true)
   const [currentTemperature, setCurrentTemperature] = useState('27')
   const [location, setLocation] = useState('BR, Fortaleza')

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
      
    },
    temperatureText:{
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 50,

    },
    refreshButton:{
      position: 'absolute'
      margin: 30,
      alignSelf: 'flex-start'


    },
    cardView: {
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',

    }
  });

   


  return(
    <View style={styles.cointaner}>
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={24} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />
       <View style={styles.Temperature}>
        <text style={styles.temperatureText}>{currentTemperature}</text>
        <text style={[styles.temperatureText, {fontSize: 14}]}> °C </text>       

       </View>

       <View style={styles.cardView}>
        <MainCard title={'Manhã'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'24°'}icon={'morning'}></MainCard>
        <MainCard title={'Tarde'} backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} temperature={'31°'}icon={'afternoon'}></MainCard>
        <MainCard title={'Noite'} backgroundColor={darkTheme ? '#008081' : '#38B7B8'} temperature={'21°'}icon={'night'}></MainCard>
       </View>
      <Image
         source={require("./src/assets/logo.png")}
         style={styles.logo}
      />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>


      </View>


    </View>

  )
}

const styles = StyleSheet.create({
  cointaner:{
    flex:1,
    backgroundColor:  "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
      },
      logo:{
        marginBottom:60
      }
})