import React from 'react'
import { Tabs } from 'expo-router'

const Dash_layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index'
        options={{
            headerShown: false,

        }}
        />
        <Tabs.Screen name='profile'
        options={{
            headerShown: false
        }}
        />
        <Tabs.Screen name='settings' 
        options={{
            headerShown: false
        }}
        />
    </Tabs>
  )
}

export default Dash_layout