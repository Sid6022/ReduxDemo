
import React,{ useEffect} from 'react';
import { View ,SafeAreaView,Text,Switch} from 'react-native';
import CommonStyles from '../Styles/CommonStyle';
import { useNavigation } from "@react-navigation/native";
import Header from '../Component/Header';


const Setting = () => {

    const navigation = useNavigation();
   

      // go back button click
  function goBackClick() {
   
    navigation.goBack();
  }

    return(
        <SafeAreaView style={CommonStyles.safeArea}>
             <Header onBackClick={goBackClick}  headerTitle={"Settings"}/>
              <View style={{justifyContent:'center',alignSelf: 'center',flex:1}}>
                <Text style={{fontSize:80,alignSelf:'center'}}>
                Setting
                </Text>
            </View>
        </SafeAreaView>
    )

};


export default Setting;