import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ButtonBar({icon,iconColor, title, urlToOpen}) {
  
  const onPress = () => {
    Linking.openURL(urlToOpen);
    }
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={{flex: 1, alignItems: 'center'}}>
    <FontAwesome5 name={icon} size={28} color={iconColor} />

    </View>
       <View style={{flex: 4}}><Text style={styles.title}>{title}</Text></View> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        marginVertical: 7,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.32,
        shadowRadius: 3.22,
        elevation: 3,
        
    },

    title: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '700'
    }

})