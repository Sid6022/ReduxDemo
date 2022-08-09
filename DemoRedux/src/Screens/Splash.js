import React,{ useEffect} from 'react';
import { View ,SafeAreaView,Text} from 'react-native';
import CommonStyles from '../Styles/CommonStyle';
import { useNavigation } from "@react-navigation/native";


const Splash = () => {

    const navigation = useNavigation();
    useEffect(() => {

        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name :"Home" }],
              });
        }, 200);

    },[])

    return(
        <SafeAreaView style={CommonStyles.safeArea}>
              <View style={{justifyContent:'center',alignSelf: 'center',flex:1}}>
                <Text style={{fontSize:80,alignSelf:'center'}}>
                    Splash
                    </Text>
            </View>
        </SafeAreaView>
    )

};


export default Splash;