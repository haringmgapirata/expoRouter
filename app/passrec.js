import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function passrec() {

  const [email, setEmail] = useState('Email');
  const [text, setText] = useState('Use phone instead?');
  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
            <View style={{height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor:'#9B7EBD'}}>
              <Text variant='headlineLarge' style={{color: 'white'}}>Password Recovery</Text>
            </View>
            <View style={styles.regCont}>
                <Text variant='titleMedium' style={{marginTop: 20}}>Input email to recover password</Text>
                <TextInput
                mode='outlined'
                label= {email}
                activeOutlineColor='black'
                style={styles.input}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text variant='labelLarge' style={{marginTop: 8}}>{text}</Text>
                  <Button
                  mode='text'
                  labelStyle={{fontSize: 14}}
                  onPress={() => {setEmail((prevLabel) => (prevLabel === 'Email' ? 'Number' : 'Email'));
                    setText((prevLabel) => (prevLabel === 'Use phone instead?' ? 'Use email instead?': 'Use phone instead?'));
                  }}
                  >
                    Click here
                  </Button>
                </View>
                <Button
                  mode='contained'
                  dark={true}
                  buttonColor='#9B7EBD'
                  style={{width: 300, marginTop: 20}}
                  >
                    Recover
                  </Button>
            </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  regCont:{
    backgroundColor: 'white',
    width: '100%',
    height: 650,
    alignItems: 'center',
  },
  input:{
    height: 50, 
    width: 300,
    backgroundColor: 'white',
  },
});