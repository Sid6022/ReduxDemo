import React,{ useEffect, useRef } from 'react';
import { View ,SafeAreaView,Text,NativeModules,
  NativeEventEmitter,} from 'react-native';
import CommonStyles from '../Styles/CommonStyle';
import Header from '../Component/Header';
import { colors } from '../Utils/Constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation,useTheme } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();
  const inputRef = useRef();
  const { colors } = useTheme();

  useEffect(() => {

    setTimeout(() => {
        navigation.navigate('Profile');
    }, 200);

},[])

     return(
        <SafeAreaView style={CommonStyles.safeArea}>
                <Header leftIconType={1} ref={inputRef} headerTitle={"Product"}/>
              <View style={{justifyContent:'center',flex:1,}}>
                <Text style={{fontSize:80,alignSelf:'center',color:colors.text}}>
                    HOME
                    </Text>
                    {/* <TouchableOpacity onPress={() => {inputRef.current.localMethod2("Message from parent screen XXXXXXXX")}}> */}
                   <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>

                    <Text style={{fontSize:22,alignSelf:'center',textDecorationStyle:'dotted'}}>
                    The way to profile
                    </Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

};


export default Home;