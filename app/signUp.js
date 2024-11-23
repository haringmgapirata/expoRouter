import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function signUp(){
  const router = useRouter();
  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor:'#9B7EBD'}}>
            <Text variant='headlineLarge' style={{color: 'white'}}>Sign Up</Text>
          </View>
          <View style={styles.regCont}>
              <TextInput
              mode='outlined'
              label='Firstname'
              activeOutlineColor='black'
              style={styles.input}
              />
              <TextInput
              mode='outlined'
              label='Lastname'
              activeOutlineColor='black'
              style={styles.input}
              />
              <TextInput
              mode='outlined'
              label='Email'
              activeOutlineColor='black'
              style={styles.input}
              />
              <TextInput
              mode='outlined'
              label='Password'
              activeOutlineColor='black'
              style={styles.input}
              />
              <TextInput
              mode='outlined'
              label='Confrim Password'
              activeOutlineColor='black'
              style={styles.input}
              />
              <Button
              mode='contained'
              dark={true}
              buttonColor='#9B7EBD'
              style={{width: 300, marginTop: 20}}
              >
                Sign Up
              </Button>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text variant='titleMedium' style={{marginTop: 5}}>Already have an account?</Text>
                <Button
                mode='text'
                labelStyle={{fontSize: 17}}
                onPress={() => router.back()}
                >
                  Click Here
                </Button>
              </View>
          </View>
          
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  )
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
    marginTop: 20,
  },
});