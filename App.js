import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground,  Image } from 'react-native';
import Animated, { FadeInDown, LightSpeedInLeft } from 'react-native-reanimated';
import ButtonBar from './components/ButtonBar';

export default function App() {
  return (
    <View style={{ flex:1 }}>
      <View style={{flex:1, backgroundColor:'#fff', height: 100, width: '100%', justifyContent:'center'}}>
      <ImageBackground source={require('./assets/carbg.jpeg')} style={{flex: 1, width:'100%', height:'100%', resizeMode: 'cover', justifyContent:'center'}}>
      </ImageBackground>

      </View>
      <View style={{flex:3, backgroundColor:'white', height: 100, width: '100%', alignItems: 'center', justifyContent:'flex-start'}}>
        <Animated.View entering={LightSpeedInLeft}>
        <Image source={require('./assets/ask_logo.png')} style={{width: 100, height: 97, marginVertical: 30}} />
        </Animated.View>
        <Animated.View entering={FadeInDown}>
        <ButtonBar icon="viber" title="Καλέστε μας στο Viber" iconColor={'purple'} urlToOpen={'viber://add?number=306946087087'}/>
        <ButtonBar icon="whatsapp" title="Καλέστε μας στο WhatsApp" iconColor={'green'} urlToOpen={'https://api.whatsapp.com/send?phone=306946087087'}/>
        <ButtonBar icon="phone-square" title="210 99 25 444" iconColor={'orange'} urlToOpen={'tel:302109925444'}/>
        <ButtonBar icon="mobile-alt" title="6946 087 087" iconColor={'blue'} urlToOpen={'tel:306946087087'}/>
        <ButtonBar icon="google" title="Αξιολογήστε μας στη Google" iconColor={'red'} urlToOpen={'https://bit.ly/3McFBDH'}/>
        </Animated.View>
        </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
