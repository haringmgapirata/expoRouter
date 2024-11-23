import { View, Text } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={{width: '100%', height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#9B7EBD'}}>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white'}}>Home</Text>
    </View>
  )
}

export default home