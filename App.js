import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable, SafeAreaView, Image, Button } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);

    const OnPress = () => {
        if (phoneNumber.length !==0) {
            Alert.alert(
                "Confirm Number",
                phoneNumber,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },

                    { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
        }
    }

    return (
      <SafeAreaView style={{backgroundColor:'#05509b'}}>
       <View>
       <View style={{paddingTop: 70, marginLeft: 20, flexDirection: 'row'}}>
          <Icon name="arrow-left"  style={{fontSize:20,color:"white"  }} />
          <Image resizeMode='contain' source={require('../MyApp/myAssets/logo.png')} style={{marginLeft: 90}}/>
        </View>
        <View style={{paddingTop: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 21, fontWeight: 600}}>SIGN UP</Text>
        </View>
       <View style={styles.container}>
          <Text style={{color: 'white', fontSize: 16, marginRight: 280, paddingBottom: 5}}>Phone</Text>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                    setPhoneNumber(text);
                }}
                defaultCode="IN"
                layout='first'
                withShadow
                autoFocus
            />
            <Pressable
                style={styles.button}
                onPress={() => OnPress()}
                android_ripple="red"
            >
                <Text style={styles.text1}>Send OTP</Text>
            </Pressable>
           <View style={{marginTop:20}}>
           <Text style={{color: 'white', width:350, fontSize: 15 }}>A code will be sent to your registered number to verify your account and also to recover your password</Text>
           </View>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 27, marginBottom: 30 }}>
          <Text style={{color:'white', marginBottom:10}}>Continue</Text>
          <Text style={{color: 'white'}}>or</Text>

        </View>
        <View>
          
        </View>
        <View style ={{position: 'relative', width: 355, marginLeft: 20, gap:5 }}>
      <View style={{backgroundColor: 'white', flexDirection: 'row', height: 50, borderRadius: 10, gap: 30, alignItems: 'center'}}>
      <Image resizeMode='contain' source={require('../MyApp/myAssets/gmail.png')} style={{marginLeft: 30}}/>
        <Text style={{color:'#e7e7e7', }}> Continue with Email</Text>
      </View>
      <View style={{backgroundColor: 'white', flexDirection: 'row', height: 50, borderRadius: 10, gap: 30, alignItems: 'center'}}>
      <Image resizeMode='contain' source={require('../MyApp/myAssets/facebook.png')} style={{marginLeft: 30}}/>
        <Text style={{color:'#e7e7e7', }}> Continue with Facebook</Text>
      </View>
      <View style={{backgroundColor: 'white', flexDirection: 'row', height: 50, borderRadius: 10, gap: 30, alignItems: 'center'}}>
      <Image resizeMode='contain' source={require('../MyApp/myAssets/google.png')} style={{marginLeft: 30}}/>
        <Text  style={{color:'#e7e7e7', }}> Continue with Google</Text>
      </View>
        </View>

        <View>
        <Image resizeMode='contain' source={require('../MyApp/myAssets/Rectangle.png')} style={{}}/>
        </View>
       </View>
       
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center'
    },
    phoneContainer: {
        width: '90%',
        height: 50,
        borderRadius:10,
        
        
    },
    button: {
        marginTop: 30,
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e97fb0',
        borderRadius: 10,
        
    },
    textInput: {
        paddingVertical: 0,
        borderRadius:10
    },
    text1: {
        color:'white',
        fontWeight:'600'
    },
    
});

export default App;