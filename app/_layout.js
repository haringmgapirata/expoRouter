import React from 'react'
import { Stack } from 'expo-router'


const _layout = () => {
  return (
    <Stack 
    >
        <Stack.Screen
         name='index'
         options={{
            headerShown: false,
         }}
         />
         <Stack.Screen
         name='passrec'
         options={{
            headerShown: false,
         }}
         />
         <Stack.Screen
         name='signUp'
         options={{
            headerShown: false,
         }}
         />
         <Stack.Screen
         name='dashboard'
         />
    </Stack>
  )
}

export default _layout