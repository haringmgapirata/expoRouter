import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function passrec() {
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
                label='Email'
                activeOutlineColor='black'
                style={styles.input}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text variant='labelLarge' style={{marginTop: 8}}>Use phone instead?</Text>
                  <Button
                  mode='text'
                  labelStyle={{fontSize: 14}}
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