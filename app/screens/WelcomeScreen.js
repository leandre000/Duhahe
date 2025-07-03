import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={8}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
             <AppButton title="Login"/>
              <AppButton title="Register" color='secondary'/>
            
            </View>

           
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer :{
        padding:20,
        width:'100%',

    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 90,
        borderRadius:70,
    },
    tagline: {
        marginTop: 10, 
        fontSize: 20, 
        color: '#000', 
        fontWeight:"600",
        paddingVertical:15,
    },
  
});

export default WelcomeScreen;
