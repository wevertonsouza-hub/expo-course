import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Fontisto } from '@expo/vector-icons';

const MainCard = (props) => {
    const Icon = () => {
        if(props.icon === 'morning'){
            return(
                <Feather name="sun" style={styles.cardIcon} size={40} color="orange" />            

            )
        }

    }

    const styles = StyleSheet.create({
       
        card:{
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',


            borderRadius: 20,
            margin: 10,
            width: 110,
            height: 210,


        
        },
   
        refreshButton:{
          position: 'absolute',
          margin: 30,
          alignSelf: 'flex-start'  
    
        },
        text:{
            color: 'white',
            margin: 15,
            fontSize: 20,


        },
        cardIcon:{
            color: 'white',
            margin: 15,

        },    
            
           
        
        
      });
    
    return (
        <View style={styles.card}>
            <Text style={styles.text}>props.title</Text>
            <Feather name="sun" style={styles.cardIcon} size={40} color="orange" />
            <Text style={styles.text}>{props.temperature}</Text>

        </View>
    )
}

export default MainCard


